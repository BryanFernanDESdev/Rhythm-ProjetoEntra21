CREATE VIEW view_playlists_usuarios AS
SELECT 
    u.id AS usuario_id, 
    u.email, 
    p.id AS playlist_id, 
    p.nome AS playlist_nome, 
    p.data_criacao
FROM usuarios u
INNER JOIN playlists p ON u.id = p.usuario_id;

CREATE OR REPLACE VIEW view_playlist_detalhada AS
SELECT 
    pl.id AS playlist_id,
    pl.nome AS playlist_nome,
    
    -- Dados da música
    m.id AS musica_id,
    m.nome AS musica_nome,
    m.afinacao,
    m.numero_faixa,
    m.bpm,
    m.compasso,
	m.duracao AS duracao_formatada,
    t.tom AS tom_musical,
    
    -- Dados do álbum
    alb.id AS album_id,
    alb.nome AS album_nome,
    alb.cover_url AS album_cover_url,
    alb.lancado_em AS album_lancamento,
    
    -- Dados dos artistas (agregados)
    GROUP_CONCAT(DISTINCT art.nome SEPARATOR ', ') AS artistas_nomes,
    GROUP_CONCAT(DISTINCT art.foto_url SEPARATOR '|||') AS artistas_fotos_urls,
    GROUP_CONCAT(DISTINCT art.id SEPARATOR ',') AS artistas_ids,
    
    -- Data de adição
    pm.adicionado_em AS data_adicao_playlist
FROM 
    playlists pl
INNER JOIN playlist_musica pm ON pl.id = pm.playlist_id
INNER JOIN musicas m ON pm.musica_id = m.id
INNER JOIN tons t ON m.tom_id = t.id
INNER JOIN albuns alb ON m.album_id = alb.id
INNER JOIN album_artistas aa ON alb.id = aa.album_id
INNER JOIN artistas art ON aa.artista_id = art.id
GROUP BY 
    pl.id, m.id, alb.id, t.id, pm.adicionado_em
ORDER BY 
    pl.id, m.numero_faixa;
        
CREATE VIEW view_albuns_artistas AS
    SELECT 
        alb.id AS album_id,
        alb.nome AS album_nome,
        alb.cover_url,
        alb.lancado_em,
        GROUP_CONCAT(DISTINCT art.nome
            SEPARATOR ', ') AS artistas,
        GROUP_CONCAT(DISTINCT art.foto_url
            SEPARATOR ', ') AS fotos_artistas
    FROM
        albuns alb
            INNER JOIN
        album_artistas aa ON alb.id = aa.album_id
            INNER JOIN
        artistas art ON aa.artista_id = art.id
    GROUP BY alb.id;
    
CREATE VIEW view_usuarios_spotify AS
SELECT 
    u.id AS usuario_id,
    u.email,
    u.criado_em AS data_cadastro,
    su.spotify_user,
    su.access_token,
    su.refresh_token,
    su.token_expires_at,
    su.criado_em AS spotify_vinculado_em
FROM usuarios u
LEFT JOIN spotify_user su ON u.id = su.usuario_id;
