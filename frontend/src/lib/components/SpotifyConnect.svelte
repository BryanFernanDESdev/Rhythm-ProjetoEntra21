<script>
  import { onMount } from 'svelte';
  import { authorizeSpotify, checkSpotifyConnection, disconnectSpotify } from '$lib/services/spotify.service';

  let spotifyStatus = {
    connected: false,
    loading: true,
    username: null
  };

  onMount(async () => {
    await checkConnection();
  });

  async function checkConnection() {
    try {
      spotifyStatus.loading = true;
      const result = await checkSpotifyConnection();
      spotifyStatus.connected = result.connected;
      spotifyStatus.username = result.spotifyUser || null;
    } catch (error) {
      console.error('Erro ao verificar conexão com Spotify:', error);
    } finally {
      spotifyStatus.loading = false;
    }
  }

  async function handleDisconnect() {
    try {
      spotifyStatus.loading = true;
      await disconnectSpotify();
      spotifyStatus.connected = false;
      spotifyStatus.username = null;
    } catch (error) {
      console.error('Erro ao desconectar do Spotify:', error);
    } finally {
      spotifyStatus.loading = false;
    }
  }
</script>

<div class="spotify-connect">
  {#if spotifyStatus.loading}
    <div class="loading">
      <div class="spinner"></div>
    </div>
  {:else if spotifyStatus.connected}
    <div class="connected">
      <div class="spotify-logo">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>
      <div class="status-text">
        <p>Conectado ao Spotify</p>
        {#if spotifyStatus.username}
          <p class="username">{spotifyStatus.username}</p>
        {/if}
      </div>
      <button class="disconnect-btn" on:click={handleDisconnect}>Desconectar</button>
    </div>
  {:else}
    <button class="connect-btn" on:click={authorizeSpotify}>
      <span class="spotify-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </span>
      Conectar com Spotify
    </button>
  {/if}
</div>

<style>
  .spotify-connect {
    margin: 1rem 0;
  }

  .connect-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1DB954;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .connect-btn:hover {
    background-color: #1ed760;
  }

  .spotify-icon {
    margin-right: 0.5rem;
  }

  .connected {
    display: flex;
    align-items: center;
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 0.75rem 1rem;
  }

  .spotify-logo {
    margin-right: 0.75rem;
  }

  .status-text {
    flex-grow: 1;
  }

  .status-text p {
    margin: 0;
    color: #1DB954;
    font-weight: bold;
  }

  .username {
    font-size: 0.8rem;
    color: #b3b3b3 !important;
    font-weight: normal !important;
  }

  .disconnect-btn {
    background-color: transparent;
    color: #b3b3b3;
    border: 1px solid #b3b3b3;
    border-radius: 50px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .disconnect-btn:hover {
    color: white;
    border-color: white;
  }

  .loading {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .spinner {
    width: 24px;
    height: 24px;
    border: 3px solid rgba(29, 185, 84, 0.3);
    border-radius: 50%;
    border-top-color: #1DB954;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>