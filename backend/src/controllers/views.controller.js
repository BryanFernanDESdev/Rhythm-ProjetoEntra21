import { sequelize } from "../config/config.js"

export const getPlaylist = async (req, res) => {
    try {
        const data = await sequelize.query('SELECT * FROM view_playlist_detalhada;')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}
export const getPlaylistById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await sequelize.query(`SELECT * FROM view_playlist_detalhada where playlist_id=?;`, {
            replacements: [id]
        });

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