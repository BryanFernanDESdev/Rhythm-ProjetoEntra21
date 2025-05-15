<script>
    import Nav from "$lib/components/nav.svelte";
    import Background from "$lib/components/background.svelte";
  
    const playlists = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `Playlist ${i + 1}`,
    }));
  </script>

  <Nav />
  <Background />




  <div class="mt-8 w-4xl max-w-screen mx-4 flex h-[600px] max-h-screen rounded border border-gray-900 bg-gray-950 shadow-sm shadow-black p-6 overflow-auto">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
      {#each playlists as playlist}
        <div class="flex flex-col items-center">
          <div
            class="h-28 w-28 bg-gray-800 rounded-md border border-gray-700 transition-colors duration-200 hover:bg-gray-700 cursor-pointer flex items-center justify-center text-gray-200 text-4xl"
          >
            <!-- 🎵 -->
            <!-- <img src="URL_DA_IMAGEM" alt={playlist.name} class="h-full w-full object-cover rounded-md" /> -->
            <a href=""
            ><img
                class="h-full w-full object-cover rounded-md"
                src="https://thepressfree.com/wp-content/uploads/2023/03/Best-Michael-Jackson-Songs-of-All-Time.jpg"
                alt="Michael jackson"
            /></a
        >
          </div>
          <span class="mt-2 text-sm text-gray-300 text-center">{playlist.name}</span>
        </div>
      {/each}
    </div>
  </div>