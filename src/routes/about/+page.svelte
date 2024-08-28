<script>
	import Jax from '$lib/assets/img/eatho.jpg'
	import Nextem from '$lib/assets/img/colabNlisten.jpg'
	import { blur, fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'

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
		const interval = setInterval(() => {
			randomNumber = generateRandomNumber()
			shouldBlink = randomNumber <= 150
		}, 3000)

		onDestroy(() => {
			clearInterval(interval)
		})
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 5 }}
	out:fly={{ delay: 200, duration: 300, easing: cubicInOut, x: 100, y: -50, opacity: 0.5 }}
	class="head_Line"
>
	<h1 class=" neon-text {shouldBlink ? 'blink' : ''}">About</h1>
</div>

<main
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 5 }}
	out:fly={{ delay: 200, duration: 300, easing: cubicInOut, x: 100, y: 0, opacity: 0.5 }}
>
	<img src={Nextem} alt="background" />
	<article>
		<p class="glass_Back">
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
	<img src={Jax} alt="background" />

	<article>
		<p class="glass_Back">
			In a world that's constantly racing forward, they invite you to hit pause and step into his
			vibrant, vaporwave wonderland. These photographs are not just images; they're
			experiences—whimsical, nostalgic, and unapologetically fun.
			<br /><br />
			So, if you’re ready to see the Pacific Northwest like never before, bathed in the glow of a cyber
			sunset and wrapped in the warmth of infectious curiosity, grab your windbreaker and your sense
			of wonder. It's time for a photo shoot that transcends the ordinary and embraces the extraordinary.
		</p>
	</article>
</main>

<!-- svelte-ignore css-unused-selector -->
<style>
	/* Phone size / base */
	img {
		width: 70vw;
		margin: 5vh 15vw;

		@media screen and (min-width: 768px) {
			width: 40vw;
			margin: 5vh 30vw;
		}
	}
</style>
