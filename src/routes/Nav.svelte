<script>
	import { goto } from '$app/navigation'

	function navigateTo(url) {
		goto(url, { noScroll: true })
	}

	import Camera_Svg from '../lib/svg/crown_Svg.svelte'

	let isMenuOpen = false

	function toggleMenu() {
		isMenuOpen = !isMenuOpen
	}

	let current = 0
</script>

<div class="navbar">
	<nav class:open={isMenuOpen}>
		<ul>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 0}
						on:click={() => {
							current = 0
							navigateTo('/gallery')
						}}
						href="/gallery/">Gallery</a
					>
				</button>
			</li>
			<!-- <li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 1} on:click={() => (current = 1)} href="/reviews/"
						>Reviews</a
					>
				</button>
			</li> -->
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 2}
						on:click={() => {
							current = 2
							navigateTo('/Contact')
						}}
						href="/Contact/">Contact</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 3}
						on:click|preventDefault={() => {
							current = 3
							navigateTo('/about')
						}}
						href="/about">About</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 4}
						on:click|preventDefault={() => {
							current = 4
							navigateTo('/services')
						}}
						href="/services">Services</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 5}
						on:click|preventDefault={() => {
							current = 5
							navigateTo('/blog')
						}}
						href="/blog/">Blog</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a
						class:current={current === 6}
						on:click|preventDefault={() => {
							current = 6
							navigateTo('/')
						}}
						href="/">Home</a
					>
				</button>
			</li>
		</ul>
		<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
			<a
				class:current={current === 7}
				on:click|preventDefault={() => {
					current = 7
					navigateTo('/signUp')
				}}
				href="/signUp"
			>
				Login
			</a>
		</button>
	</nav>
	<button on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<div class="burger">
			<svg> <Camera_Svg /></svg>
		</div>
	</button>
</div>

<!--svelte-ignore css-unused-selector -->
<style>
	.navbar {
		background: linear-gradient(to right, var(--highlight), var(--back_Tre), hwb(187 5% 25%));
		background-size: 400% 400%;
		animation: gradientShift 20s ease-in-out infinite;
		width: 100vw;
		display: flex;
		top: 0;
		justify-content: space-between;
		position: fixed;
		height: 5rem;
		z-index: 950;
		transition: transform 1.2s ease-in-out;
		border-bottom: var(--bord);
	}

	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.navbar button {
		all: unset;
	}

	.navbar a {
		color: var(--back_Alt);
		text-shadow:
			1px 1px 0 var(--highlight),
			-1px -1px 0 var(--grabber);
		text-decoration: none;
		transition:
			color 0.2s,
			text-shadow 0.2s;
	}

	/* /////// */

	.navbar a:hover,
	.navbar a:focus {
		color: var(--grabber);
		text-shadow:
			2px 0 var(--highlight),
			-2px 0 var(--grabber);
		animation: rgbSplit 1.2s infinite;
	}

	@keyframes rgbSplit {
		0% {
			text-shadow:
				2px 0 var(--highlight),
				-2px 0 var(--grabber);
		}
		50% {
			text-shadow:
				-2px 0 var(--highlight),
				2px 0 var(--grabber);
		}
		100% {
			text-shadow:
				2px 0 var(--highlight),
				-2px 0 var(--grabber);
		}
	}

	/* ///// */
	.navbar ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		list-style: none;
		margin: 0;
	}

	.navbar ul li button {
		all: unset;
	}

	.navbar .burger {
		height: fit-content;
		width: 100%;
		display: flex;
		background-color: transparent;
		margin-left: 1rem;
		align-items: center;
		justify-content: center;
	}

	.navbar .burger:hover {
		cursor: pointer;
		transition: transform 0.1s ease-in-out;
		transform: scale(1.1);
	}

	.navbar .burger svg {
		width: 2.5rem;
		height: 2.5rem;
	}

	nav {
		display: none;
	}

	nav.open {
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--gradient_Alt);
		width: 100%;
		box-shadow: var(--box_Shadow);
		border-bottom: var(--bord);
		border-top: var(--bord);
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		box-shadow: 0 0 10px rgba(255, 119, 169, 0.8);
	}

	/* Laptop styles */
	@media only screen and (min-width: 1024px) {
		nav {
			display: flex;
		}

		.navbar {
			height: 4rem;
		}

		.navbar .burger {
			display: none;
		}

		.navbar ul {
			flex-direction: row-reverse;
			gap: 2rem;
			margin: 0 15vw;

			& li {
				&:hover {
					background: var(--back_Main);
					padding: 1rem 0;
				}
			}
		}
	}

	/* Larger screens */
	@media only screen and (min-width: 1440px) {
		.navbar ul {
			gap: 3rem;
			margin: 0 22vw;
		}
	}
</style>
