<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<main
	class:unviewed={!mounted}
	class="w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center gap-2"
>
	<h1 class="text-7xl font-title font-bold">
		<span>Wesman</span><br />
		<span>Solutions</span>
	</h1>
	<p class="first-line:text-gray-400">Tailor-made SaaS solutions for everyone</p>
	<a
		href="mailto:contact@wesmansolutions.com"
		class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-8"
	>
		Contact Us
	</a>
</main>

<style>
	main {
		background: linear-gradient(to bottom, #1e1e25, #000);
		transition: all 1s ease-out;
	}

	main.unviewed {
		opacity: 0;
	}

	main > * {
		display: inline-block;
		transform: translateY(-1rem);
		transition: all 1.2s ease-out;
	}

	main.unviewed > * {
		transform: translateY(4rem);
		opacity: 0;
	}
</style>
