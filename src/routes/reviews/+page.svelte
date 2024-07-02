<script>
	import Five_star from '$lib/svg/crown_Svg.svelte';
</script>

<h1>Reviews</h1>

<div class="grid">
	<div class="card glass_Back">
		<h2 class="card-title">Noel</h2>

		<br />
		<div class="body">
			THE BEST PIZZA IN KITSAP COUNTY!!! The cheese was perfect. The marinara was deculate. The
			crust was nice and crisp. This will be the only pizza i'll ever order from now on. They have
			made me see the light!!
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Michael R</h2>

		<br />
		<div class="body">
			We discovered this place last month, and we only get pizza from here now. The pizza is at a
			better price than most chain pizza places, and the quality is better as well. I really like
			that they have pizza sizes for all occasions to include a huge party size pizza. Update: You
			don't need to know anything except this. I found this place a month ago, and now I refuse to
			get pizza anywhere else. Price = Amazing Quality = Better than amazing
		</div>
	</div>

	<div class="card glass_Back">
		<h2 class="card-title">Larry</h2>

		<br />
		<div class="body">
			This pizza is amazing! I've tried a couple different kinds of there pizza but I definitely
			recommend the Works! Toppings are great and so is the crust (which is a rare combination)
			Currently my favorite local pizza place! Staff is courteous and professional!
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Jenny</h2>

		<br />
		<div class="body">
			We where first timers the other night. I ordered the Veggie lovers and the chicken, bacon,
			ranch. Man these pizzas where so good, zero complaints, they where loaded. The service was
			great and everything was done correctly. Look forward to trying more of your menu. Recommend!
		</div>
	</div>

	<div class="card glass_Back">
		<h2 class="card-title">Anna</h2>

		<br />
		<div class="body">
			Great pizza! We were looking for traditional, affordable, cravable pizza (which we have found
			surprisingly hard to find since we moved here) and definitely found it at Fairgrounds.
			Delicious crust and cooked to perfect golden crispness 😋 Breadsticks are wonderful too! The
			gentleman working last Saturday 2/4 was very accommodating and provided great customer service
			too.
		</div>
	</div>

	<div class="card">
		<h2 class="card-title">Michael L</h2>

		<br />
		<div class="body">
			I go here relatively often, and I'm always impressed. They have a great $6 deal, and their
			pizzas are incredibly delicious. They always make sure to put a lot of toppings on, and the
			prices are not bad for what you get. It's a relatively informal establishment, but I think
			that adds to the charm. 10/10 pizza place.
		</div>
	</div>

	<div class="card glass_Back">
		<h2 class="card-title">Elissa</h2>

		<br />
		<div class="body">
			I ordered some pizza, sides, and drinks to have delivered to my brother's workplace (a vet
			clinic) for his birthday. I don't live in the area so I chose Helene's based on reviews. The
			person who answered the phone was great, and took his time answering my questions about which
			size pizza was recommended for the number of people in the clinic, etc. My brother and his
			colleagues really enjoyed the food. Bonus cute story: there was a puppy patient who was having
			a little trouble waking up from anesthesia after surgery, so they put a little pizza in front
			of his face and he started sniffing and blinking his eyes! So, Helene's is good for people and
			puppies!! Woohoo!
		</div>
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	.grid {
		.card {
			svg {
				width: 40%;
				margin: -50px 30%;
			}

			.card-title {
				font-size: var(--f_m);
			}

			.body {
				font-size: var(--font);
			}
		}
	}

	@media only screen and (min-width: 980px) {
		.grid {
			.card {
				.card-title {
					font-size: var(--f_lg);
				}

				.body {
					font-size: var(--font);
				}
			}
		}
	}
</style>
