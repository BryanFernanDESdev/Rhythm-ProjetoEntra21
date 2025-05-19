import models from "../models/index.js"

export const getArtistas = async (req, res) => {
    try {
        const data = await models.Artista.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao procurar o artista' })
    }
}

export const getArtistasById = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) return res.status(400).json({ msg: 'não é possível procurar um artista sem id' })

        const data = await models.Artista.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao procurar o artista' })
    }
}

export const deleteArtista = async (req, res) => {
    try {
        const id = req.params.id

        if (!id ) {
            return res.status(400).json({ error: 'id é obrigatórios' });
        }

        const data = await models.Artista.destroy({ where: { id: id } })
        res.status(201).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o artista' })
    }
}