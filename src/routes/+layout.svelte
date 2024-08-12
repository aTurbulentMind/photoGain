<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '$lib/style/baseCamp.svelte'
	import Header from './Nav.svelte'
	import Footer from './Footer.svelte'
	import OldVibe from '$lib/assets/img/gridbak2.png'

	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>Busy child Photography</title>
</svelte:head>
<div class="old_Vibe"><img src={OldVibe} alt="grid overlay" /></div>

<Header />

<slot />

<Footer />

<style>
	.old_Vibe {
		object-fit: cover;
		width: 100vw;
		margin: 0;
		position: fixed;
		opacity: 0.2;
		pointer-events: none;

		& img {
			z-index: 1;
		}
	}
</style>
