<!-- Modal.svelte -->
<script>
	export let showModal = false;

	// Function to close the modal
	const closeModal = () => {
		showModal = false;
	};
</script>

<div class="Moodal">
	{#if showModal}
		<div class="win_95">
			<div class="title-bar">
				<div class="title-bar-text">Rando Site</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={closeModal}>X</button>
				</div>
			</div>
			<div class="window-content">
				<p>Is it fun to be human?</p>

				<a href="/"><button class="win_95_butt">Yes</button></a>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					><button class="win_95_butt">No</button></a
				>
			</div>
		</div>
	{/if}
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	/* Define the color variables to match Windows 95 theme */
	:root {
		--win95-background: hwb(210 76% 20%);
		--win95-border-light: hwb(234 96% 0%);
		--win95-border-dark: hwb(241 3% 39%);
		--win95-border-medium: hwb(0 65% 35%);
		--win95-text: hwb(240 0% 97%);
		--win95-border-width: 2px;

		--win95-Fade: linear-gradient(to right, var(--win95-border-dark), var(--win95-border-medium))
			--win95-padding: 10px;
		--pad_sm: 5px;
		--marg_xl: 10px;
	}

	.win_95 {
		background: var(--win95-background);
		color: var(--win95-text);
		border: var(--win95-border-width) solid var(--win95-text);
		border-top-color: var(--win95-border-light);
		border-left-color: var(--win95-border-light);
		width: 80vw;
		margin-left: 10vw;
		font-size: var(--font);
		line-height: 1.5;
		position: relative;
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
		padding: var(--pad);

		.title-bar {
			background: linear-gradient(to right, var(--win95-border-dark), var(--back_Other));
			color: var(--win95-border-light);
			padding: 0 5px;
			margin: -3%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-weight: bold;
			border-bottom: var(--win95-border-width) solid var(--win95-Fade);

			.title-bar-text {
				padding: var(--pad);
				letter-spacing: 3px;
			}

			.title-bar-controls {
				display: flex;
				gap: 5px;

				button {
					background: var(--win95-background);
					border: var(--win95-border-width) solid var(--win95-text);
					border-top-color: var(--win95-border-light);
					border-left-color: var(--win95-border-light);
					width: 30px;
					height: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: var(--f_m);
					padding: auto;
					font-weight: bold;
					cursor: pointer;
				}
			}
		}

		.window-content {
			p {
				font-size: var(--f_m);
				margin: -15% 15% 0 15%;
			}

			.win_95_butt {
				background: var(--win95-background);
				border: var(--win95-border-width) solid var(--win95-text);
				border-top-color: var(--win95-border-light);
				border-left-color: var(--win95-border-light);
				color: var(--win95-text);
				padding: 5px 10px;
				margin: 0 15%;
				position: center;
				cursor: pointer;
				font-size: var(--font);
			}

			.win_95_butt:hover {
				border-color: var(--win95-border-medium);
			}
		}
	}
</style>
