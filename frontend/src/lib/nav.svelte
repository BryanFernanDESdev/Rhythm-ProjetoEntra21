<script>
	import Button from '$lib/components/MenuButton.svelte';
	import Hamburguer from '$lib/components/HamburguerMenu.svelte';
	import Magnifier from '$lib/components/Magnifier.svelte';
	import Microphone from '$lib/components/Microphone.svelte';
	import Logo from '$lib/components/Logo.svelte';
	let none = $state(true);
</script>

<header class="fixed left-0 right-0 top-0 z-20 min-h-10 bg-zinc-950">
	<nav class="flex items-center justify-between px-5">
		<button onclick={(none = !none)}>
			<Hamburguer />
		</button>
		<div class="flex items-center justify-center">
			<Magnifier />
			<input
				type="search"
				class="border-1 in-focus-within:outline-solid max-h-7 w-96 rounded-r-full border-zinc-600 bg-zinc-800 py-1 pl-2 font-semibold text-gray-100 outline-none outline-1 outline-green-100 selection:bg-green-400 selection:text-black hover:bg-zinc-700 active:bg-zinc-800"
				placeholder="Qual música você deseja tocar?"
			/>
			<Microphone />
		</div>

		<Logo />
	</nav>
</header>

<div
	class="absolute flex h-screen w-screen items-center justify-center bg-zinc-900/60"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-4">
		<h2 class="mt-6 text-center font-bold capitalize text-white">menu</h2>

		<div class="mt-5 flex flex-col gap-8">
			<Button title="Playlists" href="/" />
			<Button title="Documentação" href="/" />
			<Button title="FAQ" href="/" />
			<Button title="Saiba Mais" href="/" />
		</div>
	</div>
</div>
