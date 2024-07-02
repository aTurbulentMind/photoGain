<script>
	import { fade } from 'svelte/transition';
	import Welco from '$lib/assets/img/enerrr.jpg';

	import { onMount } from 'svelte';
	import Moodal from '$lib/assets/tools/model.svelte'; // Adjust the path if necessary

	let showModal = false;

	// Show the modal after 0.5 seconds
	onMount(() => {
		setTimeout(() => {
			showModal = true;
		}, 500),
			// the modal will flicker out for 0.2s then come back
			setTimeout(() => {
				showModal = false;
			}, 575),
			setTimeout(() => {
				showModal = true;
			}, 700);
	});
</script>

<div class="hero">
	<div class="hero_Background" />
	<div class="modal">
		<Moodal {showModal} />
	</div>
</div>

<h1>You could be lost right now...</h1>

<!-- <section id="home" in:fade={{ duration: 1000 }}>
	<h2>Welcome to Busy Photography</h2>
	<p>Capturing moments in a vibrant, vaporwave aesthetic.</p>
</section> -->

<p>
	The Essence of Street Photography: also known as candid photography, thrives on unmediated chance
	encounters and random incidents within public places. The photographer aims to capture images at
	decisive or poignant moments by carefully framing and timing their shots. Unlike studio
	photography, which is controlled and polished, street photography embraces authenticity and
	rawness. It’s about documenting people in their natural environment, often without their
	knowledge. The streets become the canvas, and the photographer’s lens reveals the beauty, chaos,
	and human stories that unfold in public spaces.
</p>

<div class="win_95">
	<div class="title-bar">
		<div class="title-bar-text">Gallery</div>
		<div class="title-bar-controls">
			<button aria-label="Close">X</button>
		</div>
	</div>
	<div class="window-content">
		<p>Look at stopped time?</p>
		<a href="/gallery/"><button class="win_95_butt">Yes</button></a>
		<button class="win_95_butt">No</button>
	</div>
</div>

<p>
	Step into the dreamy, neon-lit world of vaporwave and capture your essence with a photoshoot that
	transcends time. Embrace the retro-futuristic aesthetic where pastels meet pixelated perfection,
	and surreal vibes reign supreme. Whether you're channeling the 80s' nostalgia or creating a
	futuristic fantasy, our visionary photographers will craft visuals that are as unique as you are.
	Bathe in the glow of neon lights, float through digital landscapes, and immortalize your moments
	with a touch of aesthetic magic. Book your vaporwave photoshoot today and transform your memories
	into timeless art.
</p>

<div class="win_95">
	<div class="title-bar">
		<div class="title-bar-text">Appointments</div>
		<div class="title-bar-controls">
			<button aria-label="Close">X</button>
		</div>
	</div>
	<div class="window-content">
		<p>Schedule some time travel today!</p>
		<a href="/Contact/"><button class="win_95_butt">Yes</button></a>
		<button class="win_95_butt">No</button>
	</div>
</div>

<p>
	Meet our protagonist, a whimsical shutterbug from the misty, magical realms of the Pacific
	Northwest. Picture this: a quirky, spirited soul who sees the world through a lens tinted with
	hues of neon pink, electric blue, and shimmering violet. Our character isn't just any
	photographer—they are a connoisseur of the vaporwave aesthetic, transforming everyday scenes into
	dreamy, retro-futuristic masterpieces that look like the world has been plucked straight from an
	80s arcade fever dream.
</p>

<div class="win_95">
	<div class="title-bar">
		<div class="title-bar-text">Story</div>
		<div class="title-bar-controls">
			<button aria-label="Close">X</button>
		</div>
	</div>
	<div class="window-content">
		<p>Learn about our protagonist</p>
		<a href="/about/"><button class="win_95_butt">Yes</button></a>
		<button class="win_95_butt">No</button>
	</div>
</div>

<div>
	<h2>Sign up for stuff today!</h2>
</div>
<div class="win_95">
	<div class="title-bar">
		<div class="title-bar-text">Signup!</div>
		<div class="title-bar-controls">
			<button aria-label="Close">X</button>
		</div>
	</div>
	<div class="window-content">
		<p>Sign your life away now!</p>
		<a href="/register/"><button class="win_95_butt">Yes</button></a>
		<a href="/login/"><button class="win_95_butt">No</button></a>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}
	//Phone
	.hero {
		display: flex;
		position: relative;
		background-image: url('$lib/assets/img/enerrr.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		z-index: 990;
		height: 100vh;
		width: 100vw;

		.modal {
			margin-top: 25vh;
		}

		form {
			position: absolute;
			top: 45vh;
			left: 5vw;
			width: 90vw;
			height: 50vh;

			h2 {
				font-size: var(--f_m);
				margin: 0;
				margin-top: -10vh;
			}

			p {
				position: relative;
				top: -5vh;
				left: 0.01vw;
				margin-top: 4.25vh;
				padding: 0 5vw 0 0;
				text-align: left;
			}

			input {
				position: absolute;
				right: 7vw;
				width: 55vw;
				height: 3vh;
				font-size: var(--font);
				margin-top: 4vh;
			}

			.text_Message {
				margin-top: -3vh;
			}

			button {
				position: absolute;
				background: var(--highlight);
				width: fit-content;
				padding: 1%;
				bottom: 4vh;
				left: 35vw;
				font-size: var(--f_m);
				border-radius: var(--rad);
				font-weight: 700;

				&:hover {
					transition: all 0.3s ease-in-out;
					transform: scale(1.1);
					cursor: pointer;
					box-shadow: var(--box_Light);
				}
			}
		}
	}

	h1,
	p {
		text-shadow: var(--text_Shadow);
	}

	// Tablet
	@media only screen and (min-width: 426px) {
		.hero {
			height: 110vh;
			h1 {
				position: absolute;
				left: 1vw;
				font-size: var(--f_xl);
			}

			p {
				top: 25vh;
				left: 2vw;
				margin: 0 3vw;
				font-size: var(--f_m);
			}

			form {
				left: 5vw;
			}

			a {
				left: 25vw;
				font-size: var(--f_lg);
			}
		}

		.grid {
			margin: 10vh 2.5vw;
			grid-template-columns: 1fr 1fr;
			gap: 35px;

			.card {
				svg {
					width: 10vw;
					margin: 5% 35%;
				}
			}
		}

		.alt_Color {
			margin: 0;
			height: 115vh;
			padding: 10vh 0;
		}
	}

	// Laptop
	@media only screen and (min-width: 769px) {
		.hero {
			display: flex;
			height: 100vh;

			p {
				position: absolute;
				left: 27.5vw;
				top: 20vh;
				width: 40vw;
				font-size: var(--f_lg);
			}

			form {
				top: 50vh;
				margin-left: 10vw;
				width: 70vw;
				height: 50vh;

				h2 {
					font-size: var(--f_xl);
					margin: 0;
					margin-top: -10vh;
				}

				p {
					top: 0;
					margin-top: 3vh;
				}

				input {
					right: -15vw;
					width: 25vw;
					height: 4vh;
					margin-top: 0.5vh;
					font-size: var(--f_lg);
				}

				.text_Message {
					margin-top: -6vh;
				}

				button {
					width: 10vw;
					bottom: 3vh;
					left: 30vw;
					font-size: var(--f_lg);
				}
			}
		}

		.grid {
			margin: 15vh 10vw;

			.card {
				svg {
					width: 10vw;
					margin: 3vh 35%;
				}
			}
		}

		.text_Block {
			height: 60vh;
			margin-bottom: 0;

			.overLay {
				display: relative;
				position: absolute;
				width: 80vw;
				right: 10vw;
				margin-top: -160vh;

				p {
					margin-top: 3vh;
				}

				a {
					font-size: var(--f_xl);
				}
			}

			.img_Half {
				margin: 5vh 0;
				img {
					width: 100vw;
					margin-bottom: 5vh;
				}
			}
		}

		.alt_Color {
			color: var(--text_Main);
			background: var(--back_Main);
			margin-top: 120vh;
			margin-left: 10vw;
		}
	}

	//LgScrn
	@media only screen and (min-width: 1440px) {
		.hero {
			h1 {
				img {
					left: 0;
					padding: 0;
					margin: 0;
				}
			}

			p {
				top: 45vh;
				left: 4vw;
				width: 40vw;
				font-size: var(--f_xl);
			}
			form {
				top: 45vh;
				left: 40vw;
				width: 40vw;
				h2 {
					padding: 20% 20% 5% 5%;
					font-size: var(--f_lg);
				}

				p,
				input,
				button {
					font-size: var(--f_m);
				}

				input,
				button {
					left: 20vw;
					width: 15vw;
				}
			}
		}

		.grid {
			margin: 10vh 10vw;
			grid-template-columns: 1fr 1fr 1fr;

			.card {
				svg {
					width: 5vw;
					margin: 1vh 35%;
				}

				.body {
					font-size: var(--f_m);
				}
			}
		}

		.text_Block {
			margin: 1.5vh 0vw;

			.img_Half {
				margin: 5vh 0;
				img {
					width: 40vw;
					margin-bottom: 5vh;
				}
			}
			.overLay {
				right: 1vw;
				margin: -100vh 5vw 0 0;
				width: 50vw;

				p {
					font-size: var(--f_lg);
				}

				a {
					font-size: var(--f_lg);
					margin-left: -30vw;
				}
			}
		}

		.alt_Color {
			color: var(--back_Main);
			background: var(--back_Alt);
			height: fit-content;
			margin-top: 60vh;
			margin-left: 0;
			margin-bottom: 0;

			.text_Box {
				margin: 10% 10% 0 10%;
			}
		}
	}
</style>
