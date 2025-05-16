<script>
	import Hamburguer from '$lib/svg/HamburguerMenu.svelte';
	import Magnifier from '$lib/svg/Magnifier.svelte';
	import Microphone from '$lib/svg/Microphone.svelte';
	import Logo from '$lib/svg/Logo.svelte';
	import Button from '$lib/svg/MenuButton.svelte';
	import Close from '$lib/svg/Close.svelte';

	let none = $state(true);
</script>

<header class="shadow-2xs fixed left-0 right-0 top-0 z-20 min-h-10 bg-gray-950 shadow-blue-600/60">
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

		<div class="text-wh flex gap-4 text-lg text-white">
			<h1 class="font-bold duration-150 hover:text-blue-500">Rhythm</h1>
			<Logo />
		</div>
	</nav>
</header>

<div
	class="absolute z-10 flex h-screen w-screen items-center justify-center bg-white/10"
	style="display: {none ? 'none' : ''}"
>
	<div class="w-2xl z-10 h-[450px] rounded-xl bg-zinc-950 p-1 shadow shadow-gray-950">
		<div class="w-full flex items-center justify-center">
			<h2 class="mt-6 mx-auto font-bold capitalize text-white text-center hover:text-blue-500 hover:underline duration-150">Menu</h2>
			<button onclick={() => (none = !none)} class="-ml-10 mr-4 mt-4">
				<Close />
			</button>
		</div>
		<menu class="flex h-[80%] flex-col justify-center gap-6">
			<Button title="Playlists" href="/" />
			<Button title="Documentação" href="/" />
			<Button title="FAQ" href="/" />
			<Button title="Saiba Mais" href="/" />
		</menu>
	</div>
</div>
