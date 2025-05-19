import { where } from "sequelize";
import models from "../models/index.js"

export const getPlaylist = async (req, res) => {
    try {
        const data = await models.Playlist.findAll();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const getPlaylistById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await models.Playlist.findAll({
            where: {
                id
            }
        });
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const createPlaylist = async (req, res) => {
    try {
        const { nome, usuario_id } = req.body;

        if (!nome || !usuario_id) {
            return res.status(400).json({ error: 'Nome e usuario_id são obrigatórios' });
        }

        const data = await models.Playlist.create({
            nome,
            usuario_id,
        });

        res.status(201).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar playlist' })
    }
}

export const updatePlaylist = async (req, res) => {
    try {
        const id = req.params.id
        const {nome} = req.body

        if (!id || !nome) {
            return res.status(400).json({ error: 'Nome e id são obrigatórios' });
        }

        const data = await models.Playlist.update({ nome: nome }, { where: { id: id } })
        res.status(201).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao alterar a playlist' })
    }
}

export const deletePlaylist = async (req, res) => {
    try {
        const id = req.params.id

        if (!id ) {
            return res.status(400).json({ error: 'são obrigatórios' });
        }

        const data = await models.Playlist.destroy({ where: { id: id } })
        res.status(201).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a playlist' })
    }
}