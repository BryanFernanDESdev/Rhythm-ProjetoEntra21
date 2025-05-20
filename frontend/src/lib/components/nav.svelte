<script>
	import Hamburguer from '$lib/svg/HamburguerMenu.svelte';
	import Magnifier from '$lib/svg/Magnifier.svelte';
	import Microphone from '$lib/svg/Microphone.svelte';
	import Logo from '$lib/svg/Logo.svelte';
	import MenuButton from '$lib/components/MenuButton.svelte';
	import Close from '$lib/svg/Close.svelte';

	let none = $state(true);
</script>

<header class="fixed left-0 right-0 top-0 z-20 min-h-10 border border-b-blue-500/20 bg-zinc-950">
	<nav class="flex items-center justify-between px-5">
		<button onclick={(none = !none)}>
			<Hamburguer />
		</button>
		<div class="sm:w-lg mx-4 flex w-full max-w-96 items-center justify-center sm:max-w-fit">
			<Magnifier />
			<input
				type="search"
				class="border-1 w-xl max-h-8 rounded-r-full border-zinc-600 bg-zinc-800 py-1 pl-2 font-semibold text-gray-100 outline-none outline-1 outline-green-100 selection:bg-blue-400 selection:text-black hover:bg-zinc-700 active:bg-zinc-800"
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
	class="fixed inset-0 z-10 flex h-[100dvh] w-[100dvw] items-center justify-center bg-white/15 transition-opacity duration-300 {none
		? 'pointer-events-none opacity-0'
		: 'opacity-100'}"
>
	<div
		class="w-2xl z-10 h-[450px] transform bg-zinc-950 p-1 shadow shadow-gray-950 transition-all duration-300 {none
			? '-translate-y-20 opacity-0'
			: 'translate-y-0 opacity-100'}"
	>
		<div class="flex items-center">
			<h2 class="mx-auto text-center font-bold capitalize text-white hover:text-blue-500">Menu</h2>
			<button
				onclick={() => (none = !none)}
				class="-ml-8 inline h-8 w-8 text-right hover:bg-red-600"
			>
				<Close />
			</button>
		</div>

		<menu class="mt-5 flex h-[80%] flex-col items-center justify-center gap-6">
			<MenuButton title="Playlists" href="/playlist" />
			<MenuButton title="Documentação" href="/" />
			<MenuButton title="FAQ" href="/" />
			<MenuButton title="Saiba Mais" href="/" />
		</menu>
	</div>
</div>
