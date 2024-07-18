<!-- +page.svelte -->

<h1>hello friend, do you have your multipass?</h1>

<form method="POST" action="?/login" on:submit={() => console.log('Form submitted')}>
	<label>
		Email
		<input name="email" type="email" required />
	</label>
	<label>
		Password
		<input name="password" type="password" required />
	</label>
	<button>Log in</button>
</form>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}

	h1 {
		text-align: center;
		margin: 10%;
	}

	form {
		width: 70%;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		label {
			display: block;
		}

		input {
			width: 40%;
			margin: 0 auto;
			height: 2rem;
		}

		button {
			all: unset;
			width: fit-content;
			padding: 2%;
			margin: 0 auto;
			font-size: var(--f_lg);
			background-color: var(--go_Go_Go);
			border-radius: var(--rad);
		}
	}
</style>
