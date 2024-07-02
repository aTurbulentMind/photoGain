<script>
	import Camera_Svg from '../lib/svg/crown_Svg.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let current = 0;
</script>

<div class="navbar">
	<nav class:open={isMenuOpen}>
		<ul>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 0} on:click={() => (current = 0)} href="/gallery/"
						>Gallery</a
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
					<a class:current={current === 2} on:click={() => (current = 2)} href="/Contact/"
						>Contact</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 3} on:click={() => (current = 3)} href="/about/">About</a>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 4} on:click={() => (current = 4)} href="/services"
						>Services</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 5} on:click={() => (current = 5)} href="/blog">Blog</a>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 6} on:click={() => (current = 6)} href="/">Home</a>
				</button>
			</li>
		</ul>
	</nav>
	<button on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<div class="burger">
			<svg> <Camera_Svg /></svg>
		</div>
	</button>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	body {
		background-color: #222;
	}

	.navbar {
		button {
			all: unset;
		}

		background: linear-gradient(100deg, #f14ac5, #280d88);
		width: 100vw;
		display: flex;
		justify-content: space-between;
		position: fixed;
		height: 5rem;
		z-index: 950;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease-in-out;
		border-bottom: 2px solid var(--extra);

		.logo img {
			width: 10vw;
			padding: 1%;
			margin: 1%;
			border-radius: 8px;
			box-shadow: 0 0 20px rgba(255, 119, 169, 0.5);
		}

		a {
			color: #f4f4f9;
			font-size: 1.2rem;
			text-decoration: none;
			text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
			transition:
				color 0.2s,
				text-shadow 0.2s;
		}

		a:hover,
		a:focus {
			color: #00f4f9;
			text-shadow: 0 0 10px rgba(0, 255, 255, 1);
		}

		ul {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			gap: 1rem;
			list-style: none;
			margin: 0;
			padding: 0;
			font-size: 1.2rem;

			li {
				padding: 3% 0;
				button {
					all: unset;
					cursor: pointer;
				}
			}
		}

		.burger {
			height: fit-content;
			width: 100%;
			background-color: transparent;
			margin-right: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;

			&:hover {
				cursor: pointer;
				transition: transform 0.1s ease-in-out;
				transform: scale(1.2);
			}

			svg {
				fill: #f4f4f9;
				width: 42px;
				height: 42px;
			}
		}
	}

	nav {
		display: none;

		&.open {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			background: linear-gradient(80deg, #ff6fd8, #3813c2);
			width: 100%;
			border-top: 2px solid var(--extra);
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
		}
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--extra);
		box-shadow: 0 0 10px rgba(255, 119, 169, 0.8);
	}

	// Laptop styles
	@media only screen and (min-width: 769px) {
		nav {
			display: flex;
		}

		.navbar {
			height: 4rem;

			.burger {
				display: none;
			}

			.logo img {
				width: 8vw;
				margin-left: 1vw;
			}

			ul {
				flex-direction: row;
				gap: 2rem;
				margin: 0 2vw;
			}
		}
	}

	// Larger screens
	@media only screen and (min-width: 1440px) {
		.navbar {
			.logo img {
				width: 6vw;
				margin-left: 1vw;
			}

			ul {
				gap: 3rem;
				margin: 0 3vw;
			}
		}
	}
</style>
