import dotenv from 'dotenv';

dotenv.config();

// Verificar se as variáveis de ambiente necessárias estão definidas
const requiredEnvVars = ['SPOTIFY_CLIENT_ID', 'SPOTIFY_CLIENT_SECRET', 'SPOTIFY_REDIRECT_URI'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.warn(`Atenção: Variável de ambiente ${varName} não está definida!`);
  }
});

export const spotifyConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  scopes: [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-read',
    'user-top-read',
    'user-read-recently-played'
  ].join(' ')
};

export const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
export const SPOTIFY_ACCOUNTS_URL = 'https://accounts.spotify.com';