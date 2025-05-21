import { sequelize } from "../config/config.js"

export const getPlaylist = async (req, res) => {
    try {
        const data = await sequelize.query('SELECT * FROM view_musicas_playlists_completas;')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}
export const getArtists = async (req, res) => {
    try {
        const data = await sequelize.query('SELECT * FROM view_albuns_artistas;')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}