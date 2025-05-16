<script>
	import Nav from '$lib/components/nav.svelte';
	import Background from '$lib/components/background.svelte';

	const playlists = Array.from({ length: 12 }, (_, i) => ({
		id: i + 1,
		name: `Playlist ${i + 1}`
	}));
</script>

<Nav />
<Background />
<div
	class="w-4xl max-w-screen mx-auto mt-8 flex h-[600px] max-h-screen overflow-auto rounded border border-gray-900 bg-gray-950 p-6 shadow-sm"
>
	<div class="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
		{#each playlists as playlist}
			<div class="flex flex-col items-center">
				<div
					class="flex h-28 w-28 cursor-pointer items-center justify-center rounded-md border border-gray-700 bg-gray-800 text-4xl text-gray-200 transition-colors duration-200 hover:bg-gray-700"
				>
					<!-- 🎵 -->
					<!-- <img src="URL_DA_IMAGEM" alt={playlist.name} class="h-full w-full object-cover rounded-md" /> -->
					<a href=""
						><img
							class="h-full w-full rounded-md object-cover"
							src="https://thepressfree.com/wp-content/uploads/2023/03/Best-Michael-Jackson-Songs-of-All-Time.jpg"
							alt="Michael jackson"
						/></a
					>
				</div>
				<span class="mt-2 text-center text-sm text-gray-300">{playlist.name}</span>
			</div>
		{/each}
	</div>
</div>
