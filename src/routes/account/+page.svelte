<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { SubmitFunction } from '@sveltejs/kit'

	// Import the new component
	import Avatar from './Avatar.svelte'

	export let data
	export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm: HTMLFormElement
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''
	let website: string = profile?.website ?? ''
	let avatarUrl: string = profile?.avatar_url ?? ''

	// Log the session and profile data
	console.log('Session:', session)
	console.log('Profile:', profile)

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<h4>Hello :)</h4>

<div class="head_Line">
	<h1>Account</h1>
</div>

<div class="avatar">
	<Avatar
		{supabase}
		bind:url={avatarUrl}
		size={15}
		on:upload={() => {
			profileForm.requestSubmit()
		}}
	/>
</div>

<div class="win_95">
	<form method="post" action="?/update" use:enhance={handleSubmit} bind:this={profileForm}>
		<div class="title-bar">
			<div class="title-bar-text">Account</div>
		</div>

		<div class="window-content">
			<p>Account details</p>
		</div>
		<div>
			<label for="email">Email</label>
			<input id="email" type="text" value={session.user.email} disabled />
		</div>

		<div>
			<label for="fullName">Full Name</label>
			<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />
		</div>

		<div>
			<label for="username">Username</label>
			<input id="username" name="username" type="text" value={form?.username ?? username} />
		</div>

		<div>
			<label for="website">Website</label>
			<input id="website" name="website" type="url" value={form?.website ?? website} />
		</div>

		<br />

		<div class="window-content">
			<input
				type="submit"
				class="win_95_butt"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>

	<br />

	<div class="window-content">
		<form method="post" action="?/signout" use:enhance={handleSignOut}>
			<div>
				<button class="win_95_butt" disabled={loading}>Sign Out</button>
			</div>
		</form>
	</div>
</div>

<div class="win_95">
	<a class="win_95_butt" href="/usr_profile">Go to your admin dashboard</a>
</div>

<style>
	.avatar {
		margin: 5vh 22.5vw;
	}

	/* Windows 95 theme  box*/
	:root {
		--win95-background: hwb(210 76% 20%);
		--win95-border-light: hwb(234 96% 0%);
		--win95-border-dark: hwb(241 3% 39%);
		--win95-border-medium: hwb(0 65% 35%);
		--win95-text: hwb(240 0% 97%);
		--win95-border-width: 2px;

		--win95-Fade: linear-gradient(to right, var(--win95-border-dark), var(--win95-border-medium));

		--win95-padding: 10px;
		--win95-marg: 5px;
	}

	.win_95 {
		position: relative;
		width: 80vw;
		margin-left: 10vw;
		background: var(--win95-background);
		border: var(--win95-border-width) solid var(--win95-text);
		border-top-color: var(--win95-border-light);
		border-left-color: var(--win95-border-light);
		box-shadow: var(--box_Shadow);
		color: var(--win95-text);
		font-size: var(--f_m);
		padding: var(--pad);

		& .title-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: var(--win95-border-dark);
			border-bottom: var(--win95-border-width) solid var(--win95-Fade);
			color: var(--win95-border-light);
			padding: 0 5px;
			margin: -3%;
			font-weight: bold;

			& .title-bar-text {
				font-size: var(--f_lg);
				padding: var(--pad);
				text-shadow: none;
			}

			& .title-bar-controls {
				& button {
					display: flex;
					width: 30px;
					height: 30px;
					background: var(--win95-background);
					border: var(--win95-border-width) solid var(--win95-text);
					border-top-color: var(--win95-border-light);
					border-left-color: var(--win95-border-light);
					justify-content: center;
					align-items: center;
					font-size: var(--f_m);
					text-shadow: none;
					font-weight: bold;
					cursor: pointer;
				}
			}
		}

		& .window-content {
			& p {
				margin: var(--marg_xl);
				font-size: var(--f_m);
				text-shadow: none;
			}

			& .win_95_butt {
				background: var(--win95-background);
				border: var(--win95-border-width) solid var(--win95-text);
				border-top-color: var(--win95-border-light);
				border-left-color: var(--win95-border-light);
				padding: var(--pad_sm);
				margin: var(--bok_Sd);
				position: center;
				color: var(--win95-text);
				font-size: var(--f_m);
				cursor: pointer;
			}

			& .win_95_butt:hover {
				border-color: var(--win95-border-medium);
			}
		}
	}
</style>
