<script>
	import Header from '$lib/Header.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<Header />
{@render children()}
