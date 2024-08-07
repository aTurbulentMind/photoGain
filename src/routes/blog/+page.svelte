<!-- +page.svelte -->
<script>
	export let data
	export let recentArticles = data.recentArticles || []

	let showModal = false
	let selectedArticle = null
	let selectedIndex = -1

	function showArticleDetails(article, index) {
		selectedArticle = article
		selectedIndex = index
		showModal = true
	}

	// Function to format date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
		return new Date(dateString).toLocaleDateString(undefined, options)
	}
</script>

<div class="head_Line">
	<h1>Blog</h1>
</div>

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

	<h2>Most Recent Articles</h2>
	<div class="text_Block">
		{#if recentArticles && recentArticles.length > 0}
			<ul>
				{#each recentArticles as article, index}
					<li>
						<button
							class="win_95_butt"
							type="button"
							on:click={() => showArticleDetails(article, index)}
							aria-label="View details for {article.text_name}"
						>
							{article.text_name}
						</button>

						{#if showModal && selectedIndex === index}
							<div class="win_95">
								<div class="title-bar">
									<div class="title-bar-text">{selectedArticle.text_name}</div>
									<div class="title-bar-controls">
										<button aria-label="Close" on:click={() => (showModal = false)}>X</button>
									</div>
								</div>
								<div class="window-content">
									<p class="highlight">
										<strong>Date:</strong>
										{formatDate(recentArticles[0].date_made)}
									</p>
									<p><strong>Author:</strong> {selectedArticle.author}</p>
									<p>{selectedArticle.text_guts}</p>
								</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{:else}
			<p aria-live="polite">Loading recent articles...</p>
		{/if}
	</div>

	<br /> <br />
	<p class="text_Box cut_Box">Check out the last thing I wrote:</p>
	<br />
	<a class="bord_Caps" href="/blog/recent/">Newest words</a>
</div>

<br /> <br />
<p class="text_Box cut_Box">Or look into a library of the past:</p>
<br />
<a class="bord_Caps" href="/blog/library/">Older words</a>

<!-- svelte-ignore css-unused-selector -->
<style>
	a {
		margin: 5vh 35vw;
		font-size: var(--f_lg);
	}

	.win_95_butt {
		margin: var(--bok_Qtr);
		font-size: var(--f_m);
		padding: var(--pad);
	}

	.bord_Caps {
		margin: 5vh 0 5vh 15vw;
	}

	.window-content {
		background-color: var(--text_Main);
	}

	ul li {
		list-style-type: none;
		margin: 2vh 0;
	}
</style>
