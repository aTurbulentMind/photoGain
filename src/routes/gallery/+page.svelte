<script lang="ts">
	export let data
	let { supabase, profile } = data
	$: ({ supabase, profile } = data)

	const { folders } = data

	let showModal = false
	let selectedGallery = ''
	let selectedGalleryImages = []

	$: {
		console.log('Folders updated:', folders)
	}

	async function showGalleryDetails(galleryName) {
		try {
			const { data, error } = await supabase.storage.from('Gallery').list(galleryName, {
				limit: 100
			})

			if (error) {
				console.error('Error fetching gallery details:', error)
				return
			}

			if (data && data.length > 0) {
				selectedGalleryImages = data.map((file) => {
					const publicURL = `https://auiqlbvzsvvsjvpijukm.supabase.co/storage/v1/object/public/Gallery/${galleryName}/${file.name}`
					return publicURL
				})
			} else {
				console.log('No images found in gallery:', galleryName)
			}

			selectedGallery = galleryName
			showModal = true
		} catch (err) {
			console.error('Error showing gallery details:', err)
		}
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

<style>
	.gallery-container {
		width: 100vw;
		margin: 0 auto;
		color: var(--highlight_Alt);
		background-color: var(--back_Hallow_Dark);
		border: 2px solid var(--highlight_Alt);
		border-radius: 10px;
		box-shadow: var(--box_Shadow);

		& h2 {
			text-transform: uppercase;
			padding: 20px;
			margin: 0;
		}

		& img {
			width: 20vw;
			cursor: pointer;
		}
	}

	.intro-paragraph {
		margin-bottom: 40px;
		font-size: var(--f_m);
		color: var(--highlight_Alt);
	}

	h2 {
		color: var(--highlight);
		margin-top: 20px;
	}

	.carousel-container {
		display: flex;
		overflow-x: auto;
		gap: 10px;
		margin: 40px 10px;

		&::-webkit-scrollbar {
			height: 12px;
		}

		&::-webkit-scrollbar-thumb {
			background: var(--highlight_Alt);
			border-radius: 10px;
		}

		&::-webkit-scrollbar-track {
			background: var(--back_Hallow_Dark);
			border-radius: 10px;
		}
	}

	button {
		all: unset;
		background: var(--grabber);
		text-align: center;
		padding: var(--pad);
		margin: var(--marg);
		border-radius: var(--rad);
		cursor: pointer;

		&:hover {
			background: var(--back_Hallow);
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
		width: 80vw;
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
