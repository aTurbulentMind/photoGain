<script>
	import Jax from '$lib/assets/img/jax.jpg';
	import Nextem from '$lib/assets/img/enzz.jpg';
</script>

<h1>Services</h1>

<div class="text_Block">
	<img class="backBack" src={Nextem} alt="background" />
	<p class="text_Box cut_Box overLay glass_Back">
		Exciting developments are on the horizon! We are thrilled to announce that services like
		appointments for photo and video shoots will soon be available. This addition will allow clients
		to easily schedule and manage their sessions with our talented team. Whether you're looking for
		professional headshots, creative portraits, or high-quality video production, our upcoming
		booking system will streamline the process, making it simpler than ever to secure your desired
		time slot. Stay tuned for more details on how to access and utilize this convenient service.

		<br /><br />
		Our new appointment scheduling service will offer a seamless and user-friendly experience. Clients
		will be able to view available dates and times, select their preferred slots, and receive immediate
		confirmation. This system aims to enhance our service delivery by reducing wait times and ensuring
		that each session is perfectly tailored to your needs. We are committed to providing exceptional
		service and look forward to offering this new feature to enhance your experience with us. Keep an
		eye out for the official launch and be ready to book your shoots with ease and confidence.
	</p>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../style/baseCamp';
	//Phone size / base
	.text_Block {
		.text_Box {
			text-shadow: var(--text-Light);
		}
		.overLay {
			margin-top: -90vh;
			font-size: var(--font);
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
