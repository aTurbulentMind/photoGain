<script>
	import { supabase } from '$lib/supabaseClient';

	export let data;

	const { folders } = data;

	let showModal = false;
	let selectedGallery = '';
	let selectedGalleryImages = [];

	$: {
		console.log('Folders updated:', folders);
	}

	async function showGalleryDetails(galleryName) {
		try {
			const { data, error } = await supabase.storage
				.from('Gallery')
				.list(galleryName, { limit: 100 });

			if (error) {
				return;
			}

			if (data && data.length > 0) {
				selectedGalleryImages = data.map((file) => {
					const publicURL = `https://moajtchljlwdsgzlmkxu.supabase.co/storage/v1/object/public/Gallery/${galleryName}/${file.name}`;
					return publicURL;
				});
			} else {
			}

			selectedGallery = galleryName;
			showModal = true;
		} catch (err) {}
	}
</script>

<div class="gallery-container">
	<h1>Vaporwave Gallery</h1>
	<p class="intro-paragraph">
		Vaporwave is a unique genre that blends music, art, and internet culture into a nostalgic yet
		futuristic aesthetic. Emerging in the early 2010s, this style draws heavily from 1980s and 1990s
		pop culture, incorporating elements such as retro computer graphics, early internet imagery, and
		smooth jazz or elevator music remixes.
	</p>

	{#if folders && folders.length > 0}
		<div class="carousel-container">
			{#each folders as folder}
				<button
					class="gallery-item"
					type="button"
					aria-label="View details for {folder.name}"
					on:click={() => showGalleryDetails(folder.name)}
				>
					<h2>{folder.name}</h2>
				</button>
			{/each}
		</div>
	{:else if folders === undefined}
		<p aria-live="polite">Loading folders...</p>
	{:else}
		<p aria-live="polite">No folders found.</p>
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

<!-- 
		import { supabase } from '$lib/supabaseClient';
	// The data prop is passed from the server-side load function.
	export let data;

	// Destructure the folders array from data.
	const { folders } = data;

	// Log the initial state of folders.
	console.log('Initial folders:', folders);

	let showModal = false;
	let selectedGallery = '';
	let selectedGalleryImages = [];

	// Watch for updates to folders and log the updated state.
	$: {
		console.log('Folders updated:', folders);
	}

	// Function to show gallery details when a folder is selected.
	async function showGalleryDetails(galleryName) {
		console.log(`showGalleryDetails called with galleryName: ${galleryName}`);
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
					const publicURL = `https://moajtchljlwdsgzlmkxu.supabase.co/storage/v1/object/public/Gallery/${galleryName}/${file.name}`;
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
	} -->

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
