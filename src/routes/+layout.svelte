<script>
	import Header from './Nav.svelte';
	import Footer from './Footer.svelte';

	import './style/baseCamp.scss';
</script>

<Header />

<slot />

<Footer />

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
</style>
