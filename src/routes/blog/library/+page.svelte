<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';

	let pastArticles = [];
	let showModal = false;
	let selectedArticle = null;

	async function fetchPastArticles() {
		try {
			const { data, error } = await supabase
				.from('Allthestuff')
				.select('*')
				.order('id', { ascending: false })
				.eq('status', 'done');

			if (error) {
				console.error('Error fetching past articles:', error.message);
				return;
			}

			pastArticles = data.map((article) => ({
				...article,
				short_guts: article.text_guts.split(' ').slice(0, 50).join(' ') + '...'
			}));
			console.log('Fetched past articles:', pastArticles);
		} catch (err) {
			console.error('Error:', err.message);
		}
	}

	function showArticleDetails(article) {
		selectedArticle = article;
		showModal = true;
	}

	onMount(fetchPastArticles);
</script>

<h1>Library of past ideas</h1>

<div class="blog-container">
	<h1 class="blog-title">Check out what I said the other day</h1>

	{#if pastArticles.length > 0}
		<ul>
			{#each pastArticles as article}
				<li>
					<button
						class="bordt"
						type="button"
						aria-label="View details for {article.text_name}"
						on:click={() => showArticleDetails(article)}
					>
						{article.text_name}
					</button>
					<p class="highlight"><strong>Date:</strong> {article.date_made}</p>
					<p>{article.short_guts}</p>
				</li>
			{/each}
		</ul>
	{:else}
		<p>Loading past articles...</p>
	{/if}

	{#if showModal}
		<div class="modal full-window" role="presentation">
			<div class="modal-content">
				{#if selectedArticle}
					<h2>{selectedArticle.text_name}</h2>
					<p><strong>Date:</strong> {selectedArticle.date_made}</p>
					<p>{selectedArticle.text_guts}</p>
				{/if}
				<button type="button" on:click={() => (showModal = false)}>Close</button>
			</div>
		</div>
	{/if}
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
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

	.modal.full-window {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: var(--back_Hallow_Dark);
		padding: 20px;
		border-radius: 8px;
		max-width: 80vw;
		max-height: 80vh;
		overflow-y: auto;
	}
</style>
