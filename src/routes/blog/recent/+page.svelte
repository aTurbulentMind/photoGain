<!-- +page.svelte -->
<script>
	export let data
	export let recentArticles = data.recentArticles || []

	$: {
		console.log('Updated recentArticles:', recentArticles)
	}

	console.log('Initial data:', data)

	const { props } = data

	console.log('Initial recentArticles:', recentArticles)

	let showModal = false
	let selectedArticle = null

	async function showArticleDetails(article) {
		try {
			console.log('Article passed to showArticleDetails:', article)

			selectedArticle = article
			showModal = true

			console.log('Updated selectedArticle:', selectedArticle)
			console.log('Updated showModal:', showModal)
		} catch (err) {
			console.error('Error:', err.message)
		}
	}

	$: {
		console.log('Updated recentArticles:', recentArticles)
	}
</script>

<h1>Most Recent Fire</h1>

<div class="blog-container">
	{#if recentArticles.length > 0}
		<h2 class="blog-title">{recentArticles[0].text_name}</h2>
		<p class="highlight"><strong>Date:</strong> {recentArticles[0].date_made}</p>
		<div class="blog-content">
			<p>{recentArticles[0].text_guts}</p>
		</div>
	{:else}
		<p>Loading most recent article...</p>
	{/if}
</div>

<style>
	.blog-container {
		max-width: 90vw;
		margin-left: 5vw;
		padding: 20px;
		background-color: var(--back_Hallow_Dark);
		border: 2px solid var(--highlight);
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
