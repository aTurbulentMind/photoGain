<!-- +page.svelte -->
<script>
	export let data
	export let recentArticles = data.recentArticles || []

	$: {
		console.log('Updated recentArticles:', recentArticles)
	}

	// Function to format date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
		return new Date(dateString).toLocaleDateString(undefined, options)
	}

	function formatTextGuts(text) {
		// Replace newlines with <br> tags for line breaks
		return text.replace(/\n/g, '<br />')
	}
</script>

<div class="head_Line">
	<h1>Library of The Sunken City</h1>
</div>

<div class="blog-container">
	{#if recentArticles.length > 0}
		{#each recentArticles as article}
			<h2 class="blog-title neon-text">{article.text_name}</h2>
			<p class="highlight"><strong>Date:</strong> {formatDate(recentArticles[0].date_made)}</p>
			<div class="blog-content">
				<p>{@html formatTextGuts(article.text_guts)}</p>
			</div>
		{/each}
	{:else}
		<p>Loading most recent articles...</p>
	{/if}
</div>

<p>Loading most recent articles...(in the future. They are not actually loading right now)</p>

<!-- svelte-ignore css-unused-selector -->
<style>
	.blog-container {
		max-width: 90vw;
		margin-left: 5vw;
		padding: var(--pad_sm);
		border: 2px solid var(--highlight);
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
		background-color: var(--back_Hallow_Dark);

		/* Larger screens */
		@media only screen and (min-width: 1024px) {
			max-width: 80vw;
			margin-left: 10vw;
		}
	}

	.blog-title {
		font-family: var(--font_Quad);
		color: var(--grabber);
		font-size: var(--f_xxl);
		text-align: center;
		text-transform: capitalize;

		@media only screen and (min-width: 1024px) {
			font-size: var(--f_xxxl);
			margin: 0;
		}
	}

	.blog-content {
		font-size: var(--font);

		& p {
			margin: var(--marg);
		}
	}

	.highlight {
		color: var(--highlight);
	}

	ul {
		list-style-type: square;
		margin: 20px 0;
		padding-left: 20px;
	}

	ul li {
		margin: 10px 0;
	}

	.image-container {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}

	.image-container img {
		max-width: 100%;
		border: 2px solid var(--highlight);
		border-radius: 8px;
	}
</style>
