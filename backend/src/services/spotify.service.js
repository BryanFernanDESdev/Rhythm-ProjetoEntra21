import axios from 'axios';
import { spotifyConfig, SPOTIFY_API_BASE_URL, SPOTIFY_ACCOUNTS_URL } from '../config/spotify.config.js';
import models from '../models/index.js';
import querystring from 'querystring';

/**
 * Gera a URL de autorização para o login com Spotify
 */
export const getAuthorizationUrl = () => {
  const params = {
    client_id: spotifyConfig.clientId,
    response_type: 'code',
    redirect_uri: spotifyConfig.redirectUri,
    scope: spotifyConfig.scopes,
    show_dialog: true
  };

  return `${SPOTIFY_ACCOUNTS_URL}/authorize?${querystring.stringify(params)}`;
};

/**
 * Troca o código de autorização por tokens de acesso
 */
export const exchangeCodeForTokens = async (code) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${SPOTIFY_ACCOUNTS_URL}/api/token`,
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: spotifyConfig.redirectUri
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${spotifyConfig.clientId}:${spotifyConfig.clientSecret}`).toString('base64')}`
      }
    });

    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in
    };
  } catch (error) {
    console.error('Erro ao trocar código por tokens:', error.response?.data || error.message);
    throw new Error('Falha ao obter tokens de acesso');
  }
};

/**
 * Atualiza o token de acesso usando o refresh token
 */
export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${SPOTIFY_ACCOUNTS_URL}/api/token`,
      data: querystring.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${spotifyConfig.clientId}:${spotifyConfig.clientSecret}`).toString('base64')}`
      }
    });

    return {
      access_token: response.data.access_token,
      expires_in: response.data.expires_in
    };
  } catch (error) {
    console.error('Erro ao atualizar token:', error.response?.data || error.message);
    throw new Error('Falha ao atualizar token de acesso');
  }
};

/**
 * Obtém informações do usuário do Spotify
 */
export const getUserProfile = async (accessToken) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter perfil do usuário:', error.response?.data || error.message);
    throw new Error('Falha ao obter informações do perfil');
  }
};

/**
 * Salva ou atualiza os dados do usuário do Spotify no banco de dados
 */
export const saveSpotifyUser = async (usuarioId, spotifyId, accessToken, refreshToken, expiresIn) => {
  try {
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + expiresIn);

    const [spotifyUser, created] = await models.SpotifyUser.findOrCreate({
      where: { usuario_id: usuarioId },
      defaults: {
        spotify_user: spotifyId,
        access_token: accessToken,
        refresh_token: refreshToken,
        token_expires_at: expiresAt,
        usuario_id: usuarioId
      }
    });

    if (!created) {
      await spotifyUser.update({
        spotify_user: spotifyId,
        access_token: accessToken,
        refresh_token: refreshToken,
        token_expires_at: expiresAt
      });
    }

    return spotifyUser;
  } catch (error) {
    console.error('Erro ao salvar usuário do Spotify:', error);
    throw new Error('Falha ao salvar dados do usuário do Spotify');
  }
};

/**
 * Verifica se o token de acesso está válido e o atualiza se necessário
 */
export const ensureValidToken = async (usuarioId) => {
  try {
    const spotifyUser = await models.SpotifyUser.findOne({
      where: { usuario_id: usuarioId }
    });

    if (!spotifyUser) {
      throw new Error('Usuário não autenticado com Spotify');
    }

    const now = new Date();
    const tokenExpiresAt = new Date(spotifyUser.token_expires_at);

    // Se o token expirar em menos de 5 minutos, atualize-o
    if (tokenExpiresAt <= new Date(now.getTime() + 5 * 60000)) {
      const { access_token, expires_in } = await refreshAccessToken(spotifyUser.refresh_token);
      
      const newExpiresAt = new Date();
      newExpiresAt.setSeconds(newExpiresAt.getSeconds() + expires_in);
      
      await spotifyUser.update({
        access_token,
        token_expires_at: newExpiresAt
      });
      
      return access_token;
    }
    
    return spotifyUser.access_token;
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    throw new Error('Falha ao verificar token de acesso');
  }
};

/**
 * Busca músicas no Spotify
 */
export const searchTracks = async (accessToken, query, limit = 20) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        q: query,
        type: 'track',
        limit
      }
    });
    return response.data.tracks.items;
  } catch (error) {
    console.error('Erro ao buscar músicas:', error.response?.data || error.message);
    throw new Error('Falha ao buscar músicas no Spotify');
  }
};

/**
 * Obtém detalhes de uma música específica
 */
export const getTrack = async (accessToken, trackId) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/tracks/${trackId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes da música:', error.response?.data || error.message);
    throw new Error('Falha ao obter detalhes da música');
  }
};

/**
 * Obtém as playlists do usuário
 */
export const getUserPlaylists = async (accessToken, limit = 50) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        limit
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Erro ao obter playlists:', error.response?.data || error.message);
    throw new Error('Falha ao obter playlists do usuário');
  }
};

/**
 * Obtém as músicas de uma playlist
 */
export const getPlaylistTracks = async (accessToken, playlistId, limit = 100) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        limit
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Erro ao obter músicas da playlist:', error.response?.data || error.message);
    throw new Error('Falha ao obter músicas da playlist');
  }
};