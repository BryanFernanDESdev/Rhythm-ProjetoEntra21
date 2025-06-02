<script>
  import { searchMusic } from '$lib/services/spotify.service';
  
  let searchQuery = '';
  let searchResults = [];
  let isLoading = false;
  let error = null;
  let selectedTrack = null;
  
  // Evento emitido quando uma música é selecionada
  export let onTrackSelect = (track) => {};
  
  async function handleSearch() {
    if (!searchQuery.trim()) return;
    
    try {
      isLoading = true;
      error = null;
      searchResults = await searchMusic(searchQuery);
    } catch (err) {
      error = 'Erro ao buscar músicas. Verifique se você está conectado ao Spotify.';
      console.error(err);
    } finally {
      isLoading = false;
    }
  }
  
  function selectTrack(track) {
    selectedTrack = track;
    onTrackSelect(track);
  }
</script>

<div class="spotify-search">
  <div class="search-form">
    <input 
      type="text" 
      bind:value={searchQuery} 
      placeholder="Buscar música no Spotify..." 
      on:keydown={(e) => e.key === 'Enter' && handleSearch()}
    />
    <button on:click={handleSearch} disabled={isLoading}>
      {#if isLoading}
        <div class="spinner"></div>
      {:else}
        Buscar
      {/if}
    </button>
  </div>
  
  {#if error}
    <div class="error-message">
      {error}
    </div>
  {/if}
  
  {#if searchResults.length > 0}
    <div class="results-container">
      <h3>Resultados da busca</h3>
      <ul class="track-list">
        {#each searchResults as track}
          <li 
            class="track-item" 
            class:selected={selectedTrack && selectedTrack.id === track.id}
            on:click={() => selectTrack(track)}
          >
            {#if track.album && track.album.images && track.album.images.length > 0}
              <img src={track.album.images[track.album.images.length - 1].url} alt="Capa do álbum" />
            {:else}
              <div class="no-image"></div>
            {/if}
            <div class="track-info">
              <div class="track-name">{track.name}</div>
              <div class="track-artist">
                {track.artists.map(artist => artist.name).join(', ')}
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  {:else if searchQuery && !isLoading}
    <div class="no-results">
      Nenhum resultado encontrado para "{searchQuery}"
    </div>
  {/if}
</div>

<style>
  .spotify-search {
    margin: 1rem 0;
  }
  
  .search-form {
    display: flex;
    margin-bottom: 1rem;
  }
  
  input {
    flex-grow: 1;
    padding: 0.75rem;
    border: 1px solid #333;
    border-radius: 4px 0 0 4px;
    background-color: #121212;
    color: white;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    background-color: #1DB954;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
  }
  
  button:hover:not(:disabled) {
    background-color: #1ed760;
  }
  
  button:disabled {
    background-color: #1a1a1a;
    cursor: not-allowed;
  }
  
  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
  }
  
  .results-container {
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 1rem;
    max-height: 400px;
    overflow-y: auto;
  }
  
  h3 {
    margin-top: 0;
    color: #b3b3b3;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .track-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .track-item {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .track-item:hover {
    background-color: #282828;
  }
  
  .track-item.selected {
    background-color: #333;
  }
  
  .track-item img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: 1rem;
  }
  
  .no-image {
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 4px;
    margin-right: 1rem;
  }
  
  .track-info {
    flex-grow: 1;
  }
  
  .track-name {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  
  .track-artist {
    font-size: 0.8rem;
    color: #b3b3b3;
  }
  
  .error-message {
    color: #ff5252;
    padding: 0.75rem;
    background-color: rgba(255, 82, 82, 0.1);
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .no-results {
    color: #b3b3b3;
    text-align: center;
    padding: 2rem;
    background-color: #1a1a1a;
    border-radius: 8px;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>