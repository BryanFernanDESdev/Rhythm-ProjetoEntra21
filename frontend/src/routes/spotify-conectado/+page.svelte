<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { checkSpotifyConnection } from '$lib/services/spotify.service';

  let connectionStatus = {
    connected: false,
    loading: true,
    error: null
  };

  onMount(async () => {
    try {
      connectionStatus.loading = true;
      const result = await checkSpotifyConnection();
      connectionStatus.connected = result.connected;
      
      // Redirecionar para a página principal após verificar a conexão
      setTimeout(() => {
        goto('/');
      }, 3000);
    } catch (error) {
      connectionStatus.error = 'Erro ao verificar conexão com o Spotify';
      console.error(error);
    } finally {
      connectionStatus.loading = false;
    }
  });
</script>

<div class="container">
  <div class="spotify-success">
    {#if connectionStatus.loading}
      <div class="loading">
        <p>Verificando conexão com o Spotify...</p>
        <div class="spinner"></div>
      </div>
    {:else if connectionStatus.error}
      <div class="error">
        <h2>Erro</h2>
        <p>{connectionStatus.error}</p>
        <button on:click={() => goto('/')}>Voltar para a página inicial</button>
      </div>
    {:else if connectionStatus.connected}
      <div class="success">
        <h2>Conectado ao Spotify com sucesso!</h2>
        <p>Você será redirecionado para a página inicial em alguns segundos...</p>
      </div>
    {:else}
      <div class="error">
        <h2>Falha na conexão</h2>
        <p>Não foi possível conectar sua conta ao Spotify.</p>
        <button on:click={() => goto('/')}>Voltar para a página inicial</button>
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
  }

  .spotify-success {
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: #1DB954;
    margin-bottom: 1rem;
  }

  .success {
    color: #1DB954;
  }

  .error {
    color: #ff5252;
  }

  .loading {
    color: #ffffff;
  }

  button {
    background-color: #1DB954;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #1ed760;
  }

  .spinner {
    width: 40px;
    height: 40px;
    margin: 1rem auto;
    border: 4px solid rgba(255, 255, 255, 0.3);
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