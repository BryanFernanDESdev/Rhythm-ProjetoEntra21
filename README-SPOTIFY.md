# Integração com a API do Spotify

Este documento descreve como configurar e utilizar a integração com a API do Spotify no projeto.

## Configuração

### 1. Criar uma aplicação no Spotify Developer Dashboard

1. Acesse [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Faça login com sua conta do Spotify
3. Clique em "Create an App"
4. Preencha os campos:
   - Nome da aplicação
   - Descrição
   - Website (opcional)
   - Redirect URI: `http://localhost:3000/api/spotify/callback`
5. Aceite os termos e clique em "Create"

### 2. Obter as credenciais

Após criar a aplicação, você terá acesso ao:
- Client ID
- Client Secret

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` baseado no arquivo `.env.example` e preencha as seguintes variáveis:

```
SPOTIFY_CLIENT_ID=seu_client_id_aqui
SPOTIFY_CLIENT_SECRET=seu_client_secret_aqui
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
FRONTEND_URL=http://localhost:5173
SESSION_SECRET=chave_secreta_para_sessao
```

### 4. Instalar as dependências

Execute o comando abaixo na pasta `backend`:

```bash
npm install
```

## Uso da API

### Autenticação

Para iniciar o processo de autenticação com o Spotify, redirecione o usuário para:

```
GET /api/spotify/authorize
```

Após a autenticação, o usuário será redirecionado para a página de confirmação.

### Verificar conexão

Para verificar se o usuário está conectado ao Spotify:

```
GET /api/spotify/check-connection
```

### Buscar músicas

Para buscar músicas no Spotify:

```
GET /api/spotify/search?query=nome_da_musica
```

### Obter detalhes de uma música

Para obter detalhes de uma música específica:

```
GET /api/spotify/track/:trackId
```

### Obter playlists do usuário

Para obter as playlists do usuário:

```
GET /api/spotify/playlists
```

### Obter músicas de uma playlist

Para obter as músicas de uma playlist específica:

```
GET /api/spotify/playlist/:playlistId/tracks
```

### Desconectar do Spotify

Para desconectar o usuário do Spotify:

```
POST /api/spotify/disconnect
```

## Componentes do Frontend

### SpotifyConnect

Componente para conectar e desconectar do Spotify:

```svelte
<script>
  import SpotifyConnect from '$lib/components/SpotifyConnect.svelte';
</script>

<SpotifyConnect />
```

### SpotifySearch

Componente para buscar músicas no Spotify:

```svelte
<script>
  import SpotifySearch from '$lib/components/SpotifySearch.svelte';
  
  function handleTrackSelect(track) {
    console.log('Música selecionada:', track);
    // Faça algo com a música selecionada
  }
</script>

<SpotifySearch onTrackSelect={handleTrackSelect} />
```

## Fluxo de Autenticação

1. O usuário clica no botão "Conectar com Spotify"
2. O usuário é redirecionado para a página de autorização do Spotify
3. O usuário autoriza o acesso
4. O Spotify redireciona o usuário de volta para a aplicação com um código de autorização
5. O backend troca o código por tokens de acesso e refresh
6. Os tokens são armazenados no banco de dados
7. O usuário é redirecionado para a página de confirmação

## Notas Importantes

- Os tokens de acesso expiram após 1 hora
- O sistema atualiza automaticamente os tokens quando necessário
- É necessário estar autenticado para usar as funcionalidades da API do Spotify