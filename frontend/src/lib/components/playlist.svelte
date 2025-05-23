<script>
	import Settings from '$lib/svg/Settings.svelte';
	import Close from '$lib/svg/Close.svelte';
	import PlaylistCard from './PlaylistCard.svelte';
	import { onMount } from 'svelte';

	let carregando = $state(false);
	let none = $state(true);
	let songs = $state([]);

	onMount(async () => {
		const response = await fetch('http://localhost:3000/views/Playlist/1');
		const data = response
		
		songs = await data.json();
		carregando = true;
	});
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

		{#if !carregando}
			<div class="ml-5 mt-20 text-2xl text-white">Carregando ...</div>
		{:else}
			{#each songs[1] as song}
				<PlaylistCard
					num={song.musica_id}
					musica={song.musica_nome}
					bpm={song.bpm}
					tom={song.tom_musical}
					afinacao="Padrão"
					duracao={song.duracao_formatada}
					data={song.album_lancamento}
					data2={song.data_adicao_playlist}
					src={song.album_cover_url}
					album={song.album_nome}
					artista={song.artistas_nomes}
					artistaUrl={song.artistas_fotos_urls}
				/>
			{/each}
		{/if}
	</div>
</div>

<div
	class="fixed inset-0 z-10 flex h-[100dvh] w-[100dvw] items-center justify-center bg-black/30 transition-opacity duration-300 {none
		? 'pointer-events-none opacity-0'
		: 'opacity-100'}"
>
	<div
		class="w-2xl z-10 h-[450px] transform bg-zinc-950 p-1 shadow-xs shadow-blue-950 transition-all duration-300 {none
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
