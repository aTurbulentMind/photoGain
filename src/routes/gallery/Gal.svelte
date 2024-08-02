<!-- src/routes/account/Gal.svelte -->
<script lang="ts">
	import type { SupabaseClient } from '@supabase/supabase-js'
	import { createEventDispatcher } from 'svelte'

	export let size = 10
	export let url: string
	export let supabase: SupabaseClient

	let avatarUrl: string | null = null

	const dispatch = createEventDispatcher()

	const downloadImage = async (path: string) => {
		console.log('Downloading image:', path)
		try {
			const { data, error } = await supabase.storage.from('Gallery').download(path)

			if (error) {
				throw error
			}

			const url = URL.createObjectURL(data)
			console.log('Image downloaded:', url)
			avatarUrl = url
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message)
			}
		}
	}

	$: if (url) {
		console.log('Downloading image from URL:', url)
		downloadImage(url)
	}
	$: if (url) downloadImage(url)
</script>

<div>
	{#if avatarUrl}
		<img
			src={avatarUrl}
			alt={avatarUrl ? 'Avatar' : 'No image'}
			class="avatar image"
			style="height: {size}em; width: {size}em;"
		/>
	{:else}
		<div class="avatar no-image" style="height: {size}em; width: {size}em;" />
	{/if}
	<input type="hidden" name="avatarUrl" value={url} />
</div>
