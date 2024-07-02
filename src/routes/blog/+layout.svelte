<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import { goto } from '$app/navigation';
	let menuItems = ['Why', 'Recent', 'Library'];
	let selected = '';

	const select = (name) => {
		selected = name;
		if (name === 'Why') {
			goto('/blog/');
		} else {
			goto('/blog/' + name.toLowerCase());
		}
	};
</script>

<meni>
	<!-- Side menu -->
	<div>
		<ul>
			{#each menuItems as item (item)}
				<li>
					<button class={selected === item ? 'selected' : ''} on:click={() => select(item)}>
						{item}
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Page content -->
	<div style="flex-grow: 1; padding: 20px;">
		<slot />
	</div>
</meni>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	button {
		all: unset;
	}

	meni {
		display: flex;

		ul {
			position: fixed;
			display: flex;
			margin: 50vh -2vw;
			transform: rotate(270deg);
			width: 8vw;

			li {
				list-style: none;
				cursor: pointer;
				padding: 0 2vw;
				border-right: 1px solid var(--back_Hallow);
			}
		}
	}

	.selected {
		background-color: var(--back_Alt);
		color: var(--back_Main);
	}

	@media (min-width: 980px) {
		meni {
			display: flex;

			ul {
				position: fixed;
				display: inline;
				transform: rotate(0deg);
				margin: 50vh 2vw;
				width: 8vw;
				border-right: 1px solid var(--back_Hallow);

				li {
					list-style: none;
					cursor: pointer;
					border-right: none;
				}
			}
		}

		.selected {
			background-color: var(--back_Alt);
			color: var(--back_Main);
		}
	}
</style>
