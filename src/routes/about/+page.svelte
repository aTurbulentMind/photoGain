<script>
	import Jax from '$lib/assets/img/jax.jpg';
	import Nextem from '$lib/assets/img/envv.jpg';
</script>

<h1>About</h1>

<img_Intro>
	<img src={Jax} alt="background" />

	<div class="text_Block">
		<p class="text_Box glass_Back">
			Wandering through the lush forests and foggy coastlines, they capture the essence of the
			Pacific Northwest with a twist. Their camera is an extension of his imaginative mind, framing
			the majestic beauty of nature with a splash of surreal, synthetic glow. Whether it's a
			moss-covered tree basking in the soft glow of a virtual sunset or a quiet seaside town
			illuminated by pixelated stars, their photos are a portal to another dimension—a world where
			nostalgia meets neon.
		</p>

		<p class="text_Box glass_Back">
			But their charm doesn't stop at the photography. They are the kind of person who'll show up to
			a shoot in a vintage windbreaker, humming synthwave tunes, and cracking jokes that make you
			laugh till your sides hurt. The studio is a treasure trove of retro gadgets, cassette tapes,
			and old-school video games, each item with a story that adds a layer of intrigue to the
			eclectic personality. Every session with them is an adventure, a journey through time and
			space where the boundaries of reality blur and the extraordinary becomes the norm.
		</p>
	</div>
</img_Intro>

<div class="text_Block">
	<img class="backBack" src={Nextem} alt="background" />
	<p class="text_Box cut_Box overLay glass_Back">
		In a world that's constantly racing forward, they invites you to hit pause and step into his
		vibrant, vaporwave wonderland. These photographs are not just images; they're
		experiences—whimsical, nostalgic, and unapologetically fun.
		<br /><br />
		So, if you’re ready to see the Pacific Northwest like never before, bathed in the glow of a cyber
		sunset and wrapped in the warmth of infectious curiosity, grab your windbreaker and your sense of
		wonder. It's time for a photoshoot that transcends the ordinary and embraces the extraordinary.
	</p>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../style/baseCamp';
	//Phone size / base
	img_Intro {
		img {
			object-fit: cover;
			width: 100vw;
		}
	}

	h2 {
		margin-top: 20vh;
	}

	.text_Block {
		.text_Box {
			text-shadow: var(--text-Light);
		}
		.overLay {
			margin-top: -80vh;
		}
	}

	.backBack {
		object-fit: cover;
		height: 100vh;
		width: 100vw;
	}

	//Tablet size
	@media only screen and (min-width: 426px) {
		img_Intro {
			img {
				object-fit: cover;
				width: 100vw;
			}
		}

		h2 {
			margin-top: 50vh;
		}
	}

	//Laptop size
	@media only screen and (min-width: 769px) {
		img_Intro {
			img {
				height: 100vh;
			}
			.text_Block {
				margin: -85vh 2vw 0 10vw;
				.text_Box {
					width: 80vw;
					margin-top: 5vh;
					z-index: 999;
				}
			}
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

	//Lrg Screen
	@media only screen and (min-width: 1440px) {
		img_Intro {
			img {
				height: 100vh;
			}
			.text_Block {
				margin: -85vh 2vw 0 10vw;
				.text_Box {
					width: 80vw;
					margin-top: 5vh;
					z-index: 999;
				}
			}
		}

		.text_Block {
			.backBack {
				width: 100vw;
				height: 110vh;
				object-fit: cover;
			}
		}

		.overLay {
			margin-top: -50vh;
		}

		.wk {
			margin-top: 60vh;
		}
	}
</style>
