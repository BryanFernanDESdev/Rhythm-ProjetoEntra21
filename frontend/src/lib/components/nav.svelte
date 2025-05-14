<script>
	import Hamburguer from '$lib/svg/HamburguerMenu.svelte';
	import Magnifier from '$lib/svg/Magnifier.svelte';
	import Microphone from '$lib/svg/Microphone.svelte';
	import Logo from '$lib/svg/Logo.svelte';
	import Button from '$lib/svg/MenuButton.svelte';

	let none = $state(false);
</script>

<header class="fixed left-0 right-0 top-0 z-20 min-h-10 bg-zinc-950">
	<nav class="flex items-center justify-between px-5">
		<button onclick={(none = !none)}>
			<Hamburguer />
		</button>
		<div class="mx-4 flex w-full max-w-96 items-center justify-center sm:w-96 sm:max-w-fit">
			<Magnifier />
			<input
				type="search"
				class="border-1 in-focus-within:outline-solid flex-3/4 max-h-7 rounded-r-full border-zinc-600 bg-zinc-800 py-1 pl-2 font-semibold text-gray-100 outline-none outline-1 outline-green-100 selection:bg-green-400 selection:text-black hover:bg-zinc-700 active:bg-zinc-800 sm:w-96"
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
	<div class="w-2xl h-[500px] rounded-2xl bg-zinc-950 p-1 z-10">
		<h2 class="mt-6 text-center font-bold capitalize text-white">Menu</h2>

		<menu class="flex flex-col justify-center gap-6 h-[80%]">
			<Button title="Playlists" href="/" />
			<Button title="Documentação" href="/" />
			<Button title="FAQ" href="/" />
			<Button title="Saiba Mais" href="/" />
		</menu>
	</div>
</div>
