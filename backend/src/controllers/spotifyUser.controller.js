import models from "../models/index.js"

export const getSpotifyUser = async (req, res) => {
    try {
        const query = await models.PlaylistMusica.findAll()
        res.status(200).json(query)
    } catch (error) {
        res.status(500).send('erro interno do serviodor')
    }
}

export const getSpotifyUserById = async (req, res) => {
    try {
        const id = req.params.id
        const query = await models.PlaylistMusica.findAll({
            where: {
                id
            }
        })

        res.status(200).json(query)
    } catch (error) {
        res.status(500).send('erro interno do serviodor')
    }
}

