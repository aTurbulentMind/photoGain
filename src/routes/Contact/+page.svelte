<script>
	import Phone_Svg from '$lib/svg/phone_Svg.svelte';
	import Mail_Svg from '$lib/svg/mail_Svg.svelte';
	import Support_Svg from '$lib/svg/crown_Svg.svelte';
	import Supp_Svg from '$lib/svg/suppy_Svg.svelte';

	function getCurrentDateTime() {
		let currentDate = new Date();

		let year = currentDate.getFullYear();
		let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding leading zero
		let day = currentDate.getDate().toString().padStart(2, '0'); // Adding leading zero
		let hours = currentDate.getHours().toString().padStart(2, '0'); // Adding leading zero
		let minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Adding leading zero
		let seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Adding leading zero

		return `${month}/${day}/${year} ${hours}:${minutes}`;
	}

	console.log(getCurrentDateTime()); // This will print the current date and time in MM/DD/YYYY HH:MM:SS format
</script>

<h4>Hello :)</h4>

<div class="head_Line">
	<h1>Contact</h1>
</div>

<div class="grid">
	<div class="card">
		<h2 class="card-title">Call</h2>
		<svg><Phone_Svg /></svg>
		<br />
		<div class="body">
			Swift solutions at your fingertips. Call now for expert assistance in resolving your financial
			concerns.
			<br />
			<br />
			Current day and time is around: {getCurrentDateTime()}
			<br />
			<br />
			Mon-Fri 11am-5pm: <a href="/"> 1-800-555-8557</a>
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Email</h2>
		<svg><Mail_Svg /></svg>
		<br />
		<div class="body">
			Reach out effortlessly. Send us an email to start the conversation about your debt management
			needs to <a href="/">info@debtnet5.com</a>
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
					Facebook: <a href="/"> Check if its alive</a>
				</li>
				<li>
					Twitter: <a href="https://www.threads.net/@busychildphotos"> Check if its alive</a>
				</li>
				<li>
					Instagram: <a href="https://www.instagram.com/busychildphotos/"> Check if its alive</a>
				</li>
				<li>
					Social page: <a href="/"> Yet another page</a>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.grid {
		border: var(--bord);
		.card {
			box-shadow: none;
			svg {
				width: 20%;
				margin: -50px 40%;
			}

			.card-title {
				font-size: var(--font);
			}

			.body {
				font-size: var(--f_sm);
			}
		}
	}

	.head_Line {
		background: var(--back_Main);
		z-index: 901;
		margin: 8vh auto;
		font-size: var(--f_sm);
		border-radius: var(--rad);
		border: var(--bord);
		padding: var(--pad);
		width: fit-content;
		position: relative;

		h1 {
			padding: 0;
		}
	}

	ul {
		li {
			list-style-type: none;
			margin: 1vh 0;
		}
	}

	@media only screen and (min-width: 769px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			gap: var(--pad_xl);
			position: relative;
			margin-bottom: 6.9vh;

			.card {
				svg {
					width: 12vw;
					height: 7vh;
					margin: 2vh 10vw;
				}

				.card-title {
					font-size: var(--f_lg);
					margin: var(--marg);
				}

				.body {
					font-size: var(--f_m);
				}
			}
		}

		.head_Line {
			margin: 8vh 0 -13.7vh 45vw;
			h1 {
				padding: 0;
				width: fit-content;
			}
		}
	}
</style>
