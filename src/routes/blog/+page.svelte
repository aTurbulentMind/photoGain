<!-- +page.svelte -->
<script>
	export let data
	export let recentArticles = data.recentArticles || []

	$: {
		console.log('Updated recentArticles:', recentArticles)
	}

	// Log the initial value of 'data'
	console.log(' 1. Initial data:', data)

	// Destructure 'props' from 'data', then 'recentArticles' from 'props'
	const { props } = data

	// Now 'recentArticles' should be defined
	console.log('Initial recentArticles:', recentArticles)

	let showModal = false
	let selectedArticle = null

	async function showArticleDetails(article) {
		try {
			// Log the article that was passed to the function
			console.log('3. Article passed to showArticleDetails:', article)

			selectedArticle = article
			showModal = true

			// Log the updated values of 'selectedArticle' and 'showModal'
			console.log('4. Updated selectedArticle:', selectedArticle)
			console.log('5. Updated showModal:', showModal)
		} catch (err) {
			// If an error occurred, log the error message to the console.
			console.error('6. Error:', err.message)
		}
	}

	// Reactive statement that logs 'recentArticles' whenever it changes
	$: {
		console.log('7. Updated recentArticles:', recentArticles)
	}
</script>

<h1>Blog</h1>
<div class="text_Block">
	<p class="text_Box cut_Box">
		The Vaporwave Photographer's Blog is a mesmerizing journey into the world of retro aesthetics,
		blending vibrant neon hues, nostalgic elements, and modern digital art. This unique blog
		captures the essence of the vaporwave genre, transporting readers to an era where past and
		future intertwine seamlessly. Through carefully curated photo shoots and insightful commentary,
		the blog showcases the timeless beauty of forgotten places, the allure of vintage technology,
		and the surreal charm of urban landscapes bathed in synthetic light.
		<br /><br />
		Each post on the Vaporwave Photographer's Blog is a visual and auditory experience, often accompanied
		by curated playlists that enhance the immersive journey. The blog not only highlights stunning visuals
		but also delves into the philosophy and cultural significance behind the vaporwave movement. It serves
		as a sanctuary for art enthusiasts, retro aficionados, and anyone seeking to escape the mundane and
		dive into a world where art, music, and technology converge in a nostalgic symphony. Whether you're
		a seasoned vaporwave enthusiast or a curious newcomer, the Vaporwave Photographer's Blog offers a
		refreshing perspective that celebrates the beauty of ambiguity and timelessness.
	</p>
	<br /> <br />

	<h2>Most Recent Articles</h2>
	<h1>Blog</h1>
	<div class="text_Block">
		<p class="text_Box cut_Box">The Vaporwave Photographer's Blog</p>
		<br /> <br />

		<h2>Most Recent Articles</h2>
		{#if recentArticles && recentArticles.length > 0}
			<ul>
				{#each recentArticles as article}
					<li>
						<button
							class="bordt"
							type="button"
							on:click={() => showArticleDetails(article)}
							aria-label="View details for {article.text_name}"
						>
							{article.text_name}
						</button>
					</li>
				{/each}
			</ul>
		{:else}
			<p aria-live="polite">Loading recent articles...</p>
		{/if}

		{#if showModal}
			<div class="modal-background" role="presentation">
				<div class="modal-content">
					{#if selectedArticle}
						<h2>{selectedArticle.text_name}</h2>
						<p>Date: {selectedArticle.date_made}</p>
						<p>Author: {selectedArticle.author}</p>
						<p>{selectedArticle.text_guts}</p>
					{/if}
					<button type="button" on:click={() => (showModal = false)}>Close</button>
				</div>
			</div>
		{/if}
	</div>

	<br /> <br />
	<p class="text_Box cut_Box">Or look into a library of the past.</p>
	<br />
	<a class="bordt" href="/blog/library/">Library of articles</a>
</div>

<br /> <br />
<p class="text_Box cut_Box">Or look into a library of the past.</p>
<br />
<a class="bordt" href="/blog/library/">Library of articles</a>

<style>
	a {
		margin: 5vh 35vw;
		font-size: var(--f_lg);
	}

	.bordt {
		border-top: var(--bord);
		border-bottom: var(--bord);

		margin: 5vh 15vw;
	}

	ul {
		& li {
			list-style-type: none;
			margin: 2vh 0;
		}
	}

	/* Modal styles */
	/* 
	.modal {
		background-color: #222;
		padding: 20px;
		border: 2px solid #ff77a9;
		border-radius: 10px;
		max-width: 80%;
		max-height: 80%;
		overflow-y: auto;
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
	} */

	/* @media only screen and (min-width: 1280px) {
		.text_Block {
			margin-bottom: 10vh;

			& .bordt {
				font-size: var(--f_lg);
			}
		}
	} */
</style>
