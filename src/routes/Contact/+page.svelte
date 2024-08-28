<script>
	import Phone_Svg from '$lib/svg/phone_Svg.svelte'
	import Mail_Svg from '$lib/svg/mail_Svg.svelte'
	import Supp_Svg from '$lib/svg/suppy_Svg.svelte'
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

	function getCurrentDateTime() {
		let currentDate = new Date()

		let year = currentDate.getFullYear()
		let month = (currentDate.getMonth() + 1).toString().padStart(2, '0') // Adding leading zero
		let day = currentDate.getDate().toString().padStart(2, '0') // Adding leading zero
		let hours = currentDate.getHours().toString().padStart(2, '0') // Adding leading zero
		let minutes = currentDate.getMinutes().toString().padStart(2, '0') // Adding leading zero
		let seconds = currentDate.getSeconds().toString().padStart(2, '0') // Adding leading zero

		return `${month}/${day}/${year} ${hours}:${minutes}`
	}
</script>

<div
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 3 }}
	out:fly={{ delay: 200, duration: 300, easing: cubicInOut, x: 100, y: -50, opacity: 0.5 }}
	class="head_Line"
>
	<h1 class=" neon-text {shouldBlink ? 'blink' : ''}">Contact</h1>
</div>

<div
	class="grid"
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 3 }}
	out:fly={{ delay: 200, duration: 300, easing: cubicInOut, x: 100, y: 0, opacity: 0.5 }}
>
	<div class="card">
		<h2 class="card-title">Call</h2>
		<svg><Phone_Svg /></svg>
		<br />
		<div class="body">
			Swift solutions at your fingertips. Call now for expert assistance in resolving your financial
			concerns.
			<br />
			<br />
			Current day and time is around:
			<br />
			{getCurrentDateTime()}
			<br />
			<br />
			Mon-Fri 11am-5pm: <a href="/"> <br /> 1-800-YOUR-MOM</a>
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Email</h2>
		<svg><Mail_Svg /></svg>
		<br />
		<div class="body">
			Reach out effortlessly. Send us an email to start the conversation about your debt management
			needs to <a href="/">info@urMom.com</a>
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Support</h2>
		<svg><Supp_Svg /></svg>
		<br />
		<div class="body">
			Thank you for the support. Whether a follow on social or buying me a coffee, I appreciate you.
			<br />
			<ul>
				<li>
					Facebook: <a href="/"> Check it</a>
				</li>
				<li>
					Twitter: <a href="https://www.threads.net/@busychildphotos"> Check it</a>
				</li>
				<li>
					Instagram: <a href="https://www.instagram.com/busychildphotos/"> Check it</a>
				</li>
				<li>
					Social page:
					<br />
					<a href="/"> Yet another page</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<!--svelte-ignore css-unused-selector -->
<style>
	.grid {
		width: 90vw;
		margin: 1vh auto;

		& .card {
			& svg {
				width: 25%;
				margin: -50px 40% 0 40%;
			}
		}

		@media screen and (min-width: 768px) {
			width: 80vw;
		}
	}

	h4 {
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
</style>
