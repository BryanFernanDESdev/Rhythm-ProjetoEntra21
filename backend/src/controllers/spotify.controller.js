import * as spotifyService from '../services/spotify.service.js';
import models from '../models/index.js';

/**
 * Redireciona o usuário para a página de autorização do Spotify
 */
export const authorize = (req, res) => {
  try {
    const authUrl = spotifyService.getAuthorizationUrl();
    res.redirect(authUrl);
  } catch (error) {
    console.error('Erro ao gerar URL de autorização:', error);
    res.status(500).json({ error: 'Erro ao iniciar processo de autorização' });
  }
};

/**
 * Callback para processar o código de autorização retornado pelo Spotify
 */
export const callback = async (req, res) => {
  try {
    const { code } = req.query;
    const { state } = req.query;
    const usuarioId = req.session?.usuario?.id;

    if (!code) {
      return res.status(400).json({ error: 'Código de autorização não fornecido' });
    }

    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    // Troca o código por tokens
    const { access_token, refresh_token, expires_in } = await spotifyService.exchangeCodeForTokens(code);
    
    // Obtém informações do perfil do usuário
    const userProfile = await spotifyService.getUserProfile(access_token);
    
    // Salva ou atualiza os dados do usuário do Spotify
    await spotifyService.saveSpotifyUser(
      usuarioId,
      userProfile.id,
      access_token,
      refresh_token,
      expires_in
    );

    // Redireciona para a página de sucesso no frontend
    res.redirect(`${process.env.FRONTEND_URL}/spotify-conectado`);
  } catch (error) {
    console.error('Erro no callback do Spotify:', error);
    res.status(500).json({ error: 'Erro ao processar autenticação do Spotify' });
  }
};

/**
 * Verifica se o usuário está conectado ao Spotify
 */
export const checkConnection = async (req, res) => {
  try {
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    const spotifyUser = await models.SpotifyUser.findOne({
      where: { usuario_id: usuarioId }
    });

    if (!spotifyUser) {
      return res.status(200).json({ connected: false });
    }

    return res.status(200).json({ 
      connected: true,
      spotifyUser: spotifyUser.spotify_user
    });
  } catch (error) {
    console.error('Erro ao verificar conexão com Spotify:', error);
    res.status(500).json({ error: 'Erro ao verificar conexão com Spotify' });
  }
};

/**
 * Busca músicas no Spotify
 */
export const searchMusic = async (req, res) => {
  try {
    const { query } = req.query;
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    if (!query) {
      return res.status(400).json({ error: 'Termo de busca não fornecido' });
    }

    // Garante que o token está válido
    const accessToken = await spotifyService.ensureValidToken(usuarioId);
    
    // Busca músicas
    const tracks = await spotifyService.searchTracks(accessToken, query);
    
    res.status(200).json(tracks);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    res.status(500).json({ error: 'Erro ao buscar músicas no Spotify' });
  }
};

/**
 * Obtém detalhes de uma música específica
 */
export const getTrackDetails = async (req, res) => {
  try {
    const { trackId } = req.params;
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    // Garante que o token está válido
    const accessToken = await spotifyService.ensureValidToken(usuarioId);
    
    // Obtém detalhes da música
    const track = await spotifyService.getTrack(accessToken, trackId);
    
    res.status(200).json(track);
  } catch (error) {
    console.error('Erro ao obter detalhes da música:', error);
    res.status(500).json({ error: 'Erro ao obter detalhes da música' });
  }
};

/**
 * Obtém as playlists do usuário
 */
export const getUserPlaylists = async (req, res) => {
  try {
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    // Garante que o token está válido
    const accessToken = await spotifyService.ensureValidToken(usuarioId);
    
    // Obtém playlists
    const playlists = await spotifyService.getUserPlaylists(accessToken);
    
    res.status(200).json(playlists);
  } catch (error) {
    console.error('Erro ao obter playlists:', error);
    res.status(500).json({ error: 'Erro ao obter playlists do usuário' });
  }
};

/**
 * Obtém as músicas de uma playlist
 */
export const getPlaylistTracks = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    // Garante que o token está válido
    const accessToken = await spotifyService.ensureValidToken(usuarioId);
    
    // Obtém músicas da playlist
    const tracks = await spotifyService.getPlaylistTracks(accessToken, playlistId);
    
    res.status(200).json(tracks);
  } catch (error) {
    console.error('Erro ao obter músicas da playlist:', error);
    res.status(500).json({ error: 'Erro ao obter músicas da playlist' });
  }
};

/**
 * Desconecta o usuário do Spotify
 */
export const disconnect = async (req, res) => {
  try {
    const usuarioId = req.session?.usuario?.id;
    
    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    await models.SpotifyUser.destroy({
      where: { usuario_id: usuarioId }
    });

    res.status(200).json({ message: 'Desconectado do Spotify com sucesso' });
  } catch (error) {
    console.error('Erro ao desconectar do Spotify:', error);
    res.status(500).json({ error: 'Erro ao desconectar do Spotify' });
  }
};