<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types.js'

	export let form: ActionData

	let loading = false

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<h4>Hello :)</h4>

<div class="head_Line">
	<h1>User Management</h1>
</div>

<form class="form" method="POST" use:enhance={handleSubmit}>
	<div class="win_95">
		<div class="title-bar">
			<div class="title-bar-text">Sign in</div>
		</div>
		<br />
		<br />
		<div class="window-content">
			<p>Sign in via magic link with your email below</p>
			{#if form?.message !== undefined}
				<div>
					{form?.message}
				</div>
			{/if}
			<div>
				<label for="email">Email address</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Your email"
					value={form?.email ?? ''}
				/>
			</div>
			{#if form?.errors?.email}
				<span>
					{form?.errors?.email}
				</span>
			{/if}
			<div>
				<button class="win_95_butt">
					{loading ? 'Loading' : 'Send link'}
				</button>
			</div>
		</div>
	</div>
</form>

<!--svelte-ignore css-unused-selector -->
<style>
	.win_95 {
		height: 70vh;
		width: 90vw;
		margin: 0;
	}
</style>
