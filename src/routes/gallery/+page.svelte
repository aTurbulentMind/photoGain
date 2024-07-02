<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let images = [];
	let showModal = false;
	let selectedGallery = null;
	let selectedGalleryImages = [];

	async function fetchImages() {
		try {
			console.log('Fetching gallery folders from Supabase storage...');
			const { data: folders, error: folderError } = await supabase.storage.from('Gallery').list('');

			if (folderError) {
				console.error('Error fetching folders:', folderError.message);
				return;
			}

			if (folders && folders.length > 0) {
				images = await Promise.all(
					folders.map(async (folder) => {
						const { data: files, error: fileError } = await supabase.storage
							.from('Gallery')
							.list(folder.name, { limit: 1 });
						if (fileError) {
							console.error(`Error fetching files from folder ${folder.name}:`, fileError.message);
							return null;
						}

						if (files && files.length > 0) {
							const publicURL = `https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${folder.name}/${files[0].name}`;
							console.log(
								`Generated public URL for ${files[0].name} in folder ${folder.name}: ${publicURL}`
							);
							return { name: folder.name, url: publicURL };
						}

						return { name: folder.name, url: null };
					})
				);

				images = images.filter((image) => image !== null);
				console.log('Fetched images:', images);
			} else {
				console.log('No folders found in the Gallery.');
			}
		} catch (err) {
			console.error('Error:', err.message);
		}
	}

	async function showGalleryDetails(galleryName) {
		try {
			console.log(`Fetching images from gallery: ${galleryName}`);
			const { data, error } = await supabase.storage
				.from('Gallery')
				.list(galleryName, { limit: 100 });

			if (error) {
				console.error('Error fetching images:', error.message);
				return;
			}

			if (data && data.length > 0) {
				selectedGalleryImages = data.map((file) => {
					const publicURL = `https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${galleryName}/${file.name}`;
					console.log(`Generated public URL for ${file.name}: ${publicURL}`);
					return publicURL;
				});
				console.log('Fetched gallery images:', selectedGalleryImages);
			} else {
				console.log('No images found in the gallery.');
			}

			selectedGallery = galleryName;
			showModal = true;
		} catch (err) {
			console.error('Error:', err.message);
		}
	}

	onMount(fetchImages);
</script>

<div class="gallery-container">
	<h1>Vaporwave Gallery</h1>
	<p class="intro-paragraph">
		Vaporwave is a unique genre that blends music, art, and internet culture into a nostalgic yet
		futuristic aesthetic. Emerging in the early 2010s, this style draws heavily from 1980s and 1990s
		pop culture, incorporating elements such as retro computer graphics, early internet imagery, and
		smooth jazz or elevator music remixes.
	</p>

	{#if images.length > 0}
		<div class="carousel-container">
			{#each images as image}
				<button
					class="gallery-item"
					type="button"
					aria-label="View details for {image.name}"
					on:click={() => showGalleryDetails(image.name)}
				>
					<h2>{image.name}</h2>
					{#if image.url}
						<img src={image.url} alt={image.name} />
					{:else}
						<p>No image available</p>
					{/if}
				</button>
			{/each}
		</div>
	{:else}
		<p aria-live="polite">Loading images...</p>
	{/if}

	{#if showModal}
		<div class="modal-background">
			<div class="modal">
				<h2>{selectedGallery}</h2>
				{#if selectedGalleryImages.length > 0}
					<div class="carousel-container">
						{#each selectedGalleryImages as imageUrl}
							<img src={imageUrl} alt={selectedGallery} />
						{/each}
					</div>
				{:else}
					<p aria-live="polite">Loading gallery images...</p>
				{/if}
				<button on:click={() => (showModal = false)}>Close</button>
			</div>
		</div>
	{/if}
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.gallery-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 20px;
		color: #f4f4f9;
		background-color: #222;
		border: 2px solid #ff77a9;
		border-radius: 10px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

		img {
			width: 20vw;
			cursor: pointer;
		}
	}

	.intro-paragraph {
		margin-bottom: 40px;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #ff77a9;
	}

	h2 {
		color: #ff77a9;
		margin-top: 20px;
	}

	a {
		color: #ff77a9;
		text-decoration: none;
		font-size: 1.1rem;
		margin-bottom: 20px;
		display: inline-block;
	}

	a:hover {
		text-decoration: underline;
	}

	.carousel-container {
		display: flex;
		overflow-x: auto;
		gap: 10px;
		margin-bottom: 40px;

		&::-webkit-scrollbar {
			height: 12px;
		}

		&::-webkit-scrollbar-thumb {
			background: #ff77a9;
			border-radius: 10px;
		}

		&::-webkit-scrollbar-track {
			background: #222;
			border-radius: 10px;
		}
	}

	.gallery-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	.gallery-item img {
		max-width: 200px;
		border: 2px solid #ff77a9;
		border-radius: 8px;
		object-fit: cover;
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background-color: #222;
		padding: 20px;
		border: 2px solid #ff77a9;
		border-radius: 10px;
		max-width: 80%;
		max-height: 80%;
		overflow-y: auto;
	}

	.modal img {
		width: 100%;
		margin-bottom: 10px;
	}

	.modal button {
		background-color: #ff77a9;
		color: #222;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1rem;
	}

	.modal button:hover {
		background-color: #ff99b4;
	}
</style>
