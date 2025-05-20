<script>
	import Settings from '$lib/svg/Settings.svelte';
	import Close from '$lib/svg/Close.svelte';
	import PlaylistCard from './PlaylistCard.svelte';

	let none = $state(true);
</script>

<div class="m-2 mb-0 mr-0 h-[98.5%] w-full rounded border border-blue-500/20 bg-zinc-950 p-4">
	<div class="flex">
		<h2
			class="mx-auto select-none text-center text-xl text-white duration-100 hover:text-blue-400 hover:underline"
		>
			Playlists
		</h2>
		<button onclick={(none = !none)}>
			<Settings />
		</button>
	</div>

	<div class="w-full">
		<header class="mt-5 h-4 bg-zinc-800">
			<ul
				class="text-bold flex select-none items-center justify-between gap-1 text-xs text-gray-400"
			>
				<li class="w-10 border-r-2 border-r-zinc-900 text-center">N°</li>
				<li class="w-[40%] border-r-2 border-r-zinc-900">Música</li>
				<li class="w-[7.5%] border-r-2 border-r-zinc-900 text-center">Bpm</li>
				<li class="w-[7.5%] border-r-2 border-r-zinc-900 text-center">Tom</li>
				<li class="w-[10%] border-r-2 border-r-zinc-900 text-center">Afinação</li>
				<li class="w-[7.5%] border-r-2 border-r-zinc-900 text-center">Duração</li>
				<li class="w-[13%] border-r-2 border-r-zinc-900 text-center">Adiconado em</li>
				<li class="w-[13%] text-center">Opções</li>
			</ul>
		</header>
		<PlaylistCard
			num="1"
			musica="Polly"
			bpm="120.87"
			tom="C#"
			afinacao="Padrão"
			duracao="1:12"
			data="25/10/2006"
			src="https://cdn-images.dzcdn.net/images/cover/f0282817b697279e56df13909962a54a/0x1900-000000-80-0-0.jpg"
			album="Nevermind"
			artista="Nirvana"
			artistaUrl="https://i.scdn.co/image/a4e10b79a642e9891383448cbf37d7266a6883d6"
		/>
	</div>
</div>

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
			<h2 class="mx-auto text-center font-bold capitalize text-white hover:text-blue-500">
				Playlists
			</h2>
			<button
				onclick={() => (none = !none)}
				class="-ml-8 inline h-8 w-8 text-right hover:bg-red-600"
			>
				<Close />
			</button>
		</div>
	</div>
</div>
