<script>
	export let data
	export let recentArticles = data.recentArticles || []

	// Function to format date
	function formatDate(dateString) {
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
		return new Date(dateString).toLocaleDateString(undefined, options)
	}
</script>

<div class="head_Line">
	<h1>Most Recent Fire</h1>
</div>

<div class="blog-container">
	{#if recentArticles.length > 0}
		<h2 class="blog-title">{recentArticles[0].text_name}</h2>
		<p class="highlight"><strong>Date:</strong> {formatDate(recentArticles[0].date_made)}</p>
		<div class="blog-content">
			<p>{recentArticles[0].text_guts}</p>
		</div>
	{:else}
		<p>Loading most recent article...</p>
	{/if}
</div>

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
	}

	.blog-title {
		color: var(--highlight);
		font-size: var(--f_xxl);
		text-align: center;
		text-transform: capitalize;
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
