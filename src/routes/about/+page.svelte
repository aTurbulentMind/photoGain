<script>
	import Jax from '$lib/assets/img/eatho.jpg'
	import Nextem from '$lib/assets/img/colabNlisten.jpg'

	import { onMount, onDestroy } from 'svelte'

	function generateRandomNumber() {
		return Math.floor(Math.random() * 300) + 1
	}

	let randomNumber
	let shouldBlink = false

	// Show the modal after 0.5 seconds
	onMount(() => {
		startRandomNumberGenerator()
	})

	function startRandomNumberGenerator() {
		randomNumber = generateRandomNumber()
		shouldBlink = randomNumber <= 150
		console.log('Generated Number:', randomNumber)
		const interval = setInterval(() => {
			randomNumber = generateRandomNumber()
			shouldBlink = randomNumber <= 150
			console.log('Generated Number:', randomNumber)
		}, 3000)

		onDestroy(() => {
			clearInterval(interval)
		})
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h4>Hello :)</h4>

<img class="leader" src={Nextem} alt="background" />

<div class=" head_Line">
	<h1 class=" neon-text {shouldBlink ? 'blink' : ''}">About</h1>
</div>

<figure class="img_Intro">
	<article>
		<p class="text_Box glass_Back">
			Wandering through the lush forests and foggy coastlines, they capture the essence of the
			Pacific Northwest with a twist. Their camera is an extension of his imaginative mind, framing
			the majestic beauty of nature with a splash of surreal, synthetic glow. Whether it's a
			moss-covered tree basking in the soft glow of a virtual sunset or a quiet seaside town
			illuminated by pixelated stars, their photos are a portal to another dimension—a world where
			nostalgia meets neon.
		</p>

		<p class="glass_Back">
			But their charm doesn't stop at the photography. They are the kind of person who'll show up to
			a shoot in a vintage windbreaker, humming synthwave tunes, and cracking jokes that make you
			laugh till your sides hurt. The studio is a treasure trove of retro gadgets, cassette tapes,
			and old-school video games, each item with a story that adds a layer of intrigue to the
			eclectic personality. Every session with them is an adventure, a journey through time and
			space where the boundaries of reality blur and the extraordinary becomes the norm.
		</p>
	</article>
</figure>

<section>
	<img class="backBack" src={Jax} alt="background" />
	<p class=" cut_Box overLay glass_Back">
		In a world that's constantly racing forward, they invite you to hit pause and step into his
		vibrant, vaporwave wonderland. These photographs are not just images; they're
		experiences—whimsical, nostalgic, and unapologetically fun.
		<br /><br />
		So, if you’re ready to see the Pacific Northwest like never before, bathed in the glow of a cyber
		sunset and wrapped in the warmth of infectious curiosity, grab your windbreaker and your sense of
		wonder. It's time for a photo shoot that transcends the ordinary and embraces the extraordinary.
	</p>
</section>

<!-- svelte-ignore css-unused-selector -->
<style>
	/* Phone size / base */
	.leader {
		object-fit: cover;
		width: 70vw;
		margin: 5vh 15vw;

		z-index: 995;
	}

	p {
		color: var(--text_Main);
		text-shadow: var(--text_Light);
	}

	.text_Block .overLay {
		margin-top: -80vh;
	}

	.backBack {
		object-fit: cover;
		width: 70vw;
		margin: 5vh 15vw;
	}

	.old_Vibe {
		object-fit: cover;
		width: 100vw;
		margin: 0;
		position: fixed;
		opacity: 0.5;
	}

	/* 
	 Tablet size 
	@media only screen and (min-width: 426px) {
		img_Intro img {
			object-fit: cover;
			width: 100vw;
		}

		h2 {
			margin-top: 50vh;
		}
	}

	 Laptop size 
	@media only screen and (min-width: 769px) {
		img_Intro img {
			height: 100vh;
		}

		img_Intro .text_Block {
			margin: -85vh 2vw 0 10vw;
		}

		img_Intro .text_Block .text_Box {
			width: 80vw;
			margin-top: 5vh;
			z-index: 999;
		}

		.text_Box {
			width: 40vw;
			font-size: var(--f_m);
		}

		.text_Box {
			margin-left: 5vw;
		}

		h2 {
			margin: 20vh 0;
		}

		.wk {
			margin-top: 35vh;
		}
	}

	Large Screen 
	@media only screen and (min-width: 1440px) {
		img_Intro img {
			height: 100vh;
		}

		img_Intro .text_Block {
			margin: -85vh 2vw 0 10vw;
		}

		img_Intro .text_Block .text_Box {
			width: 80vw;
			margin-top: 5vh;
			z-index: 999;
		}

		.text_Block .backBack {
			width: 100vw;
			height: 110vh;
			object-fit: cover;
		}

		.overLay {
			margin-top: -50vh;
		}

		.wk {
			margin-top: 60vh;
		}
	} */
</style>
