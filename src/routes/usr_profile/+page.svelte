<script lang="ts">
	import { onMount } from 'svelte'
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'

	export let data
	let { existingPosts, session, supabase, profile } = data

	let images = []
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
	}
	let operation = ''

	let loading = false

	async function handlePostSelection() {
		const selectedPost = existingPosts.find((post) => post.id === form.id)
		if (selectedPost) {
			form = {
				...form,
				date_made: new Date(selectedPost.date_made).toISOString().slice(0, 10),
				text_name: selectedPost.text_name,
				author: selectedPost.author,
				categories: selectedPost.categories,
				status: selectedPost.status,
				text_guts: selectedPost.text_guts,
				type_of_text: selectedPost.type_of_text.toString()
			}

			const { data: imagesData, error: imagesError } = await supabase.storage
				.from('Gallery')
				.list(`${form.text_name}/`, { limit: 100 })

			if (imagesError) {
				console.error('Error fetching images:', imagesError.message)
				return
			}

			if (imagesData && imagesData.length > 0) {
				images = imagesData.map((file, index) => {
					const publicURL = `https://auiqlbvzsvvsjvpijukm.supabase.co/storage/v1/object/public/Gallery/${form.text_name}/${file.name}`
					return { id: index, url: publicURL }
				})
			} else {
				images = []
			}
		} else {
			console.error('Selected post not found')
		}
	}

	async function deleteImage(imageUrl) {
		const fileName = imageUrl.split('/').pop()
		const { error } = await supabase.storage
			.from('Gallery')
			.remove([`${form.text_name}/${fileName}`])
		if (error) {
			console.error('Error deleting image:', error.message)
		} else {
			images = images.filter((image) => image.url !== imageUrl)
			console.log(`Successfully deleted ${fileName}`)
		}
	}

	function handleFileChange(event) {
		form.images = Array.from(event.target.files) // Convert FileList to Array
	}

	async function handleLogout() {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.error('Error logging out:', error.message)
		} else {
			console.log('Successfully logged out')
		}
	}
</script>

<br />
<br />
<br />

<div class="win_95">
	<select bind:value={operation}>
		<option value="">-- select an operation --</option>
		<option value="new">New Post</option>
		<option value="modify">Modify Existing</option>
	</select>

	<!-- New Post Form -->
	{#if operation === 'new'}
		<form method="post" action="?/submit" use:enhance enctype="multipart/form-data">
			<input type="hidden" name="operation" value="new" />
			<label>
				Type of text:
				<br />
				<label>
					<input type="radio" name="type_of_text" value="1" bind:group={form.type_of_text} /> Blog
				</label>
				<label>
					<input type="radio" name="type_of_text" value="2" bind:group={form.type_of_text} /> Gallery
				</label>
			</label>
			<br />
			<label>
				Images:
				<input type="file" name="images" id="image-upload" multiple on:change={handleFileChange} />
			</label>
			<br />
			<label>
				Date Made:
				<input type="date" name="date_made" bind:value={form.date_made} required />
			</label>
			<br />
			<label>
				Text Name:
				<input
					type="text"
					name="text_name"
					bind:value={form.text_name}
					placeholder="Name of text"
					required
				/>
			</label>
			<br />
			<label>
				Author:
				<input
					type="text"
					name="author"
					bind:value={form.author}
					placeholder="Name of author"
					required
				/>
			</label>
			<br />
			<label>
				Categories:
				<input
					type="text"
					name="categories"
					bind:value={form.categories}
					placeholder="Categories"
					required
				/>
			</label>
			<br />
			<label>
				Status:
				<input type="text" name="status" bind:value={form.status} placeholder="Status" required />
			</label>
			<br />
			<label>
				Text:
				<br />
				<textarea name="text_guts" bind:value={form.text_guts} placeholder="Text guts" required
				></textarea>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>

		<!-- Modify Existing Form -->
	{:else if operation === 'modify'}
		<form method="post" action="?/submit" use:enhance enctype="multipart/form-data">
			<input type="hidden" name="operation" value="modify" />
			<select name="id" bind:value={form.id} on:change={handlePostSelection}>
				<option value="">-- select a post --</option>
				{#each existingPosts as post}
					<option value={post.id}>{post.text_name}</option>
				{/each}
			</select>
			<br />
			{#if images.length > 0}
				<div>
					<label
						>Images Found:
						{#each images as image, i (image.id)}
							<div>
								<img src={image.url} alt="Vaporwave" />
								<button type="button" on:click={() => deleteImage(image.url)}>Delete</button>
							</div>
						{/each}
					</label>
				</div>
			{:else}
				<p>No images found for this post.</p>
			{/if}

			<label>
				Images to add:
				<input type="file" name="images" id="image-upload" multiple on:change={handleFileChange} />
			</label>
			<br />
			<label>
				Type of text:
				<br />
				<label>
					<input type="radio" name="type_of_text" value="1" bind:group={form.type_of_text} /> Blog
				</label>
				<br />
				<label>
					<input type="radio" name="type_of_text" value="2" bind:group={form.type_of_text} /> Gallery
				</label>
			</label>
			<br />
			<label>
				Date Made:
				<input type="date" name="date_made" bind:value={form.date_made} required />
			</label>

			<label>
				<br />
				Text Name:
				<input
					type="text"
					name="text_name"
					bind:value={form.text_name}
					placeholder="Name of text"
					required
				/>
			</label>
			<br />
			<label>
				Author:
				<input
					type="text"
					name="author"
					bind:value={form.author}
					placeholder="Name of author"
					required
				/>
			</label>
			<label>
				<br />
				Categories:
				<input
					type="text"
					name="categories"
					bind:value={form.categories}
					placeholder="Categories"
					required
				/>
			</label>
			<label>
				<br />
				Status:
				<input type="text" name="status" bind:value={form.status} placeholder="Status" required />
			</label>
			<br />
			<label>
				Text:
				<br />
				<textarea
					type="text"
					name="text_guts"
					bind:value={form.text_guts}
					placeholder="You can make this box bigger"
					required
				></textarea>
			</label>
			<br />
			<div class="window-content">
				<br />
				<button class="win_95_butt" type="submit">Submit</button>
			</div>
		</form>
	{/if}
	<br />
	<br />
	<!-- Logout Button -->
	<div class="window-content">
		<button class="win_95_butt" on:click={handleLogout}>Logout</button>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style>
	img {
		width: 25%;
	}

	label {
		font-size: var(--font);
	}

	textarea {
		width: 90%;
		height: 200px;
	}

	.win_95 {
		@media (min-width: 1024px) {
			width: 60vw;
			margin: var(--lrg_Marg);

			& .title-bar {
				margin: -1.5%;
			}
		}

		@media (min-width: 1440px) {
			width: 60vw;
			margin: var(--lrg_Marg);

			& .title-bar {
				margin: -1%;
			}
		}
	}

	.win_95_butt {
		margin: var(--qtr_Marg);
		font-size: var(--f_M);
		padding: var(--pad);

		@media (min-width: 766px) {
			margin: var(--lrg_Marg);
		}
	}
</style>
