<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let images = [];
	let folderName = 'neonDreams'; // Example folder name

	let form = {
		id: '',
		date_made: '',
		text_name: '',
		author: '',
		categories: '',
		status: '',
		text_guts: '',
		type_of_text: '',
		images: []
	};
	let operation = '';
	let existingPosts = [];

	onMount(async () => {
		const { data, error } = await supabase.from('Allthestuff').select('*');
		if (error) console.error('Error:', error.message);
		else existingPosts = data;
	});

	async function handleSubmit() {
		const postData = {
			date_made: form.date_made,
			text_name: form.text_name,
			author: form.author,
			categories: form.categories,
			status: form.status,
			text_guts: form.text_guts,
			type_of_text: form.type_of_text
		};

		if (operation === 'new') {
			const { data, error } = await supabase.from('Allthestuff').insert([postData]);
			if (error) console.error('Error:', error.message);
			else console.log('Data:', data);

			if (form.images && form.images.length > 0) {
				for (const image of form.images) {
					const filePath = `${form.text_name}/${image.name}`;
					const { error: uploadError } = await supabase.storage
						.from('Gallery')
						.upload(filePath, image);

					if (uploadError) {
						console.error('Error uploading image:', uploadError.message);
					} else {
						console.log(`Successfully uploaded ${image.name}`);
					}
				}
			}
		} else if (operation === 'modify') {
			const { data, error } = await supabase
				.from('Allthestuff')
				.update(postData)
				.match({ id: form.id });
			if (error) console.error('Error:', error.message);
			else console.log('Data:', data);

			location.reload();
		}
	}

	async function handlePostSelection() {
		const selectedPost = existingPosts.find((post) => post.id === form.id);
		if (selectedPost) {
			form = {
				...form,
				date_made: selectedPost.date_made,
				text_name: selectedPost.text_name,
				author: selectedPost.author,
				categories: selectedPost.categories,
				status: selectedPost.status,
				text_guts: selectedPost.text_guts,
				type_of_text: selectedPost.type_of_text.toString()
			};

			const { data: imagesData, error: imagesError } = await supabase.storage
				.from('Gallery')
				.list(`${form.text_name}/`, { limit: 100 });

			if (imagesError) {
				console.error('Error fetching images:', imagesError.message);
				return;
			}

			if (imagesData && imagesData.length > 0) {
				images = imagesData.map((file, index) => {
					const publicURL = `https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${form.text_name}/${file.name}`;
					return { id: index, url: publicURL };
				});
			} else {
				images = [];
			}
		}
	}

	async function deleteImage(imageUrl) {
		const fileName = imageUrl.split('/').pop();
		const { error } = await supabase.storage
			.from('Gallery')
			.remove([`${form.text_name}/${fileName}`]);
		if (error) console.error('Error deleting image:', error.message);
		else {
			images = images.filter((image) => image.url !== imageUrl);
			console.log(`Successfully deleted ${fileName}`);
		}
	}

	async function handleLogout() {
		const { error } = await supabase.auth.signOut();
		if (error) console.error('Error logging out:', error.message);
		else console.log('Successfully logged out');
	}
</script>

<h1>Hello friend.</h1>

<select bind:value={operation}>
	<option value="">-- select an operation --</option>
	<option value="new">New Post</option>
	<option value="modify">Modify Existing</option>
</select>

{#if operation === 'new'}
	<!-- New Post Form -->
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Type of text:
			<label>
				<input type="radio" bind:group={form.type_of_text} value="1" /> Blog
			</label>
			<label>
				<input type="radio" bind:group={form.type_of_text} value="2" /> Gallery
			</label>
		</label>

		<label>
			Images:
			<input type="file" id="image-upload" multiple bind:files={form.images} />
		</label>

		<label>
			Date Made:
			<input type="date" bind:value={form.date_made} required />
		</label>
		<label>
			Text Name:
			<input type="text" bind:value={form.text_name} placeholder="Name of text" required />
		</label>
		<label>
			Author:
			<input type="text" bind:value={form.author} placeholder="Name of author" required />
		</label>
		<label>
			Categories:
			<input type="text" bind:value={form.categories} placeholder="Categories" required />
		</label>
		<label>
			Status:
			<input type="text" bind:value={form.status} placeholder="Status" required />
		</label>
		<label>
			Text:
			<input type="text" bind:value={form.text_guts} placeholder="Text guts" required />
		</label>
		<button type="submit">Submit</button>
	</form>
{:else if operation === 'modify'}
	<!-- Modify Existing Form -->
	<form on:submit|preventDefault={handleSubmit}>
		<select bind:value={form.id} on:change={handlePostSelection}>
			<option value="">-- select a post --</option>
			{#each existingPosts as post}
				<option value={post.id}>{post.text_name}</option>
			{/each}
		</select>
		<br />
		{#if images.length > 0}
			<div>
				{#each images as image, i (image.id)}
					<div>
						<img src={image.url} alt="Vaporwave" />
						<button on:click={() => deleteImage(image.url)}>Delete</button>
					</div>
				{/each}
			</div>
		{:else}
			<p>No images found for this post.</p>
		{/if}
		<label>
			Type of text:
			<label>
				<input type="radio" bind:group={form.type_of_text} value="1" /> Blog
			</label>
			<label>
				<input type="radio" bind:group={form.type_of_text} value="2" /> Gallery
			</label>
		</label>

		<label>
			Date Made:
			<input type="date" bind:value={form.date_made} required />
		</label>
		<label>
			Text Name:
			<input type="text" bind:value={form.text_name} placeholder="Name of text" required />
		</label>
		<label>
			Author:
			<input type="text" bind:value={form.author} placeholder="Name of author" required />
		</label>
		<label>
			Categories:
			<input type="text" bind:value={form.categories} placeholder="Categories" required />
		</label>
		<label>
			Status:
			<input type="text" bind:value={form.status} placeholder="Status" required />
		</label>
		<label>
			Text:
			<input type="text" bind:value={form.text_guts} placeholder="Text guts" required />
		</label>
		<button type="submit">Submit</button>
	</form>
{/if}

<!-- Logout Button -->
<button on:click={handleLogout}>Logout</button>
