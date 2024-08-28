<script>
	import { onMount, onDestroy } from 'svelte'
	import { slide, blur, fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'

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

<div
	in:blur={{ delay: 100, duration: 300, easing: cubicInOut, amount: 5 }}
	out:fly={{ delay: 200, duration: 600, easing: cubicInOut, x: 100, y: -50, opacity: 0.5 }}
	class="head_Line"
>
	<h1 class=" neon-text {shouldBlink ? 'blink' : ''}">Services</h1>
</div>

<!-- 
<h4>Hello :)</h4> -->
<div
	in:slide={{ delay: 300, duration: 300, easing: cubicInOut, axis: 'x' }}
	out:blur={{ delay: 100, duration: 300, easing: cubicInOut }}
>
	<main>
		<p>
			Exciting developments are on the horizon! We are thrilled to announce that services like
			appointments for photo and video shoots will soon be available. This addition will allow
			clients to easily schedule and manage their sessions with our talented team. Whether you're
			looking for professional headshots, creative portraits, or high-quality video production, our
			upcoming booking system will streamline the process, making it simpler than ever to secure
			your desired time slot. Stay tuned for more details on how to access and utilize this
			convenient service.

			<br /><br />
			Our new appointment scheduling service will offer a seamless and user-friendly experience. Clients
			will be able to view available dates and times, select their preferred slots, and receive immediate
			confirmation. This system aims to enhance our service delivery by reducing wait times and ensuring
			that each session is perfectly tailored to your needs. We are committed to providing exceptional
			service and look forward to offering this new feature to enhance your experience with us. Keep
			an eye out for the official launch and be ready to book your shoots with ease and confidence.
		</p>
	</main>
</div>
