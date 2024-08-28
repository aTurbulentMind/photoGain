<script>
	import { onMount, onDestroy } from 'svelte'
	import Moodal from '$lib/assets/tools/model.svelte' // Adjust the path if necessary
	import { blur, fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'

	let showModal = false

	function generateRandomNumber() {
		return Math.floor(Math.random() * 300) + 1
	}

	let randomNumber
	let shouldBlink = false

	// Show the modal after 0.5 seconds
	onMount(() => {
		setTimeout(() => {
			showModal = true
		}, 500),
			// the modal will flicker out for 0.2s then come back
			setTimeout(() => {
				showModal = false
			}, 575),
			setTimeout(() => {
				showModal = true
			}, 700)

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

<hero>
	<modal>
		<Moodal {showModal} />
	</modal>
</hero>

<div
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 5 }}
	out:fly={{ delay: 200, duration: 300, easing: cubicInOut, x: 100, y: -50, opacity: 0.5 }}
	class="head_Line"
>
	<h1 class="neon-text {shouldBlink ? 'blink' : ''}">Vibrant Vaporwave Distilled</h1>
</div>

<container
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 5 }}
	out:fly={{ delay: 200, duration: 600, easing: cubicInOut, x: 100, y: 0, opacity: 0.5 }}
	class="grid"
>
	<p>
		The Essence of Street Photography: also known as candid photography, thrives on unmediated
		chance encounters and random incidents within public places. The photographer aims to capture
		images at decisive or poignant moments by carefully framing and timing their shots. Unlike
		studio photography, which is controlled and polished, street photography embraces authenticity
		and rawness. It’s about documenting people in their natural environment, often without their
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
		Step into the dreamy, neon-lit world of vaporwave and capture your essence with a photoshoot
		that transcends time. Embrace the retro-futuristic aesthetic where pastels meet pixelated
		perfection, and surreal vibes reign supreme. Whether you're channeling the 80s' nostalgia or
		creating a futuristic fantasy, our visionary photographers will craft visuals that are as unique
		as you are. Bathe in the glow of neon lights, float through digital landscapes, and immortalize
		your moments with a touch of aesthetic magic. Book your vaporwave photoshoot today and transform
		your memories into timeless art.
	</p>

	<div class="win_95">
		<div class="title-bar">
			<div class="title-bar-text">Read Stuff</div>
			<div class="title-bar-controls">
				<button aria-label="Close">X</button>
			</div>
		</div>
		<div class="window-content">
			<p>Read some words today!</p>
			<a href="/blog/"><button class="win_95_butt">Yes</button></a>
			<button href="/" class="win_95_butt">No</button>
		</div>
	</div>

	<p>
		Meet our protagonist, a whimsical shutterbug from the misty, magical realms of the Pacific
		Northwest. Picture this: a quirky, spirited soul who sees the world through a lens tinted with
		hues of neon pink, electric blue, and shimmering violet. Our character isn't just any
		photographer—they are a connoisseur of the vaporwave aesthetic, transforming everyday scenes
		into dreamy, retro-futuristic masterpieces that look like the world has been plucked straight
		from an 80s arcade fever dream.
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
</container>

<!--svelte-ignore css-unused-selector -->
<style>
	hero {
		display: flex;
		position: relative;
		background-image: url('$lib/assets/img/enerrr.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		z-index: 999;
		height: 100vh;
		width: 100vw;

		& modal {
			margin: 25vh auto;
		}
	}

	.head_Line {
		@media screen and (min-width: 768px) {
			margin: 5vh auto;
		}
	}

	.grid {
		@media screen and (min-width: 1024px) {
			margin: 10vh 0;
			width: 100vw;
		}

		@media screen and (min-width: 1440px) {
			margin: 10vh 10vw;
		}
	}

	.win_95 {
		margin: 1vh auto;
		@media screen and (min-width: 1024px) {
			margin: 0 -2vw;
		}
	}
</style>
