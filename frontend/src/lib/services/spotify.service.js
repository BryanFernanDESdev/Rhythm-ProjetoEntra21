/**
 * Serviço para interagir com a API do Spotify através do backend
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Inicia o processo de autorização com o Spotify
 */
export const authorizeSpotify = () => {
  window.location.href = `${API_URL}/spotify/authorize`;
};

/**
 * Verifica se o usuário está conectado ao Spotify
 */
export const checkSpotifyConnection = async () => {
  try {
    const response = await fetch(`${API_URL}/spotify/check-connection`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao verificar conexão com Spotify');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao verificar conexão com Spotify:', error);
    return { connected: false };
  }
};

/**
 * Desconecta o usuário do Spotify
 */
export const disconnectSpotify = async () => {
  try {
    const response = await fetch(`${API_URL}/spotify/disconnect`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao desconectar do Spotify');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao desconectar do Spotify:', error);
    throw error;
  }
};

/**
 * Busca músicas no Spotify
 */
export const searchMusic = async (query) => {
  try {
    const response = await fetch(`${API_URL}/spotify/search?query=${encodeURIComponent(query)}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao buscar músicas');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    throw error;
  }
};

/**
 * Obtém detalhes de uma música específica
 */
export const getTrackDetails = async (trackId) => {
  try {
    const response = await fetch(`${API_URL}/spotify/track/${trackId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao obter detalhes da música');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao obter detalhes da música:', error);
    throw error;
  }
};

/**
 * Obtém as playlists do usuário
 */
export const getUserPlaylists = async () => {
  try {
    const response = await fetch(`${API_URL}/spotify/playlists`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao obter playlists');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao obter playlists:', error);
    throw error;
  }
};

/**
 * Obtém as músicas de uma playlist
 */
export const getPlaylistTracks = async (playlistId) => {
  try {
    const response = await fetch(`${API_URL}/spotify/playlist/${playlistId}/tracks`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Falha ao obter músicas da playlist');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao obter músicas da playlist:', error);
    throw error;
  }
};