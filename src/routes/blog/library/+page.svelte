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
</script>

<div class="head_Line">
	<h1>Library of The Sunken City</h1>
</div>

<div class="blog-container">
	{#if recentArticles.length > 0}
		{#each recentArticles as article}
			<h2 class="blog-title">{article.text_name}</h2>
			<p class="highlight"><strong>Date:</strong> {formatDate(recentArticles[0].date_made)}</p>
			<div class="blog-content">
				<p>{article.text_guts}</p>
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
		border-radius: var(--rad);
		box-shadow: var(--box_Shadow);
		background-color: var(--back_Hallow_Dark);
	}

	.blog-title {
		margin: var(--marg);
		color: var(--highlight);
		font-size: var(--f_lg);
		text-align: center;
		text-transform: capitalize;
	}

	.blog-content {
		& p {
			font-size: var(--font);
			margin: var(--marg);
		}
	}

	.highlight {
		color: var(--highlight);
	}

	.image-container {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}

	.image-container img {
		max-width: 100%;
		border: 2px solid var(--highlight);
		border-radius: var(--rad);
	}
</style>
