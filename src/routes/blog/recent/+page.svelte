<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let recentArticle = null;

	// Fetch the most recent article with status 'done'
	async function fetchRecentArticle() {
		try {
			const { data, error } = await supabase
				.from('Allthestuff')
				.select('*')
				.order('id', { ascending: false })
				.eq('status', 'done')
				.limit(1)
				.single();

			if (error) {
				console.error('Error fetching recent article:', error.message);
				return;
			}

			recentArticle = data;
			console.log('Fetched recent article:', recentArticle);
		} catch (err) {
			console.error('Error:', err.message);
		}
	}

	onMount(fetchRecentArticle);
</script>

<h1>Most Recent</h1>

<div class="blog-container">
	{#if recentArticle}
		<h2 class="blog-title">{recentArticle.text_name}</h2>
		<p class="highlight"><strong>Date:</strong> {recentArticle.date_made}</p>
		<div class="blog-content">
			<p>{recentArticle.text_guts}</p>
		</div>
	{:else}
		<p>Loading most recent article...</p>
	{/if}
</div>

<h1>Most Recent</h1>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.blog-container {
		max-width: 90vw;
		margin: 0;
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
