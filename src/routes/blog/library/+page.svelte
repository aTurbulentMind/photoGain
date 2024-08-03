<!-- +page.svelte -->
<script>
	export let data
	export let recentArticles = data.recentArticles || []

	$: {
		console.log('Updated recentArticles:', recentArticles)
	}

	console.log('Initial data:', data)
	console.log('Initial recentArticles:', recentArticles)
</script>

<h1>Library of past ideas</h1>

<div class="blog-container">
	{#if recentArticles.length > 0}
		{#each recentArticles as article}
			<h2 class="blog-title">{article.text_name}</h2>
			<p class="highlight"><strong>Date:</strong> {article.date_made}</p>
			<div class="blog-content">
				<p>{article.text_guts}</p>
			</div>
		{/each}
	{:else}
		<p>Loading most recent articles...</p>
	{/if}
</div>

<p>Loading most recent articles...(in the future. They are not actually loading right now)</p>

<style>
	.blog-container {
		max-width: 90vw;
		margin: 0;
		padding: 20px;
		background-color: var(--back_Hallow_Dark);
		border: 2px solid var(--grabber);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
		border-radius: 8px;
	}

	.blog-title {
		color: var(--highlight);
		font-size: var(--f_xxl);
		text-align: center;
	}

	.blog-content {
		font-size: var(--font);
		line-height: 1.6;
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
