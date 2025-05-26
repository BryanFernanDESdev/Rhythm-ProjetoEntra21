import { where } from "sequelize";
import models from "../models/index.js"

export const getAlbum = async (req, res) => {
    try {
        const data = await models.Album.findAll();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const getAlbumById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await models.Album.findAll({ where: { id } });
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const createAlbum = async (req, res) => {
    try {
        const { nome, cover_url, artistas_id, lancado_em } = req.body;
        if (!nome, !cover_url, !artistas_id, !lancado_em) res.status(400).send({ msg: 'body incorreto' })
        const data = await models.Album.create({ nome, cover_url, artistas_id, lancado_em })
        console.log(data)
        res.status(201).json({data})
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'erro ao criar a o album' })
    }
}

export const deleteAlbum = async (req,res) => {
    try {
        const id = req.params.id;
        if(!id) res.status(400).json({msg:'não é possivel excluir uma album sem id'})
        const data = await models.Album.destroy({where:{id}})
    res.status(200).json({data})
    } catch (error) {
        res.status(500).send({ error: 'erro ao excluir a o album' })
    }
}

export const updateAlbum = async (req,res) =>{
    try {
        const id = req.params.id;
        const {nome, cover_url, lancado_em, artistas_id} = req.body
        if(!id) res.status(400).json({msg:'não é possivel excluir uma album sem id'})
        const data = await models.Album.update({nome, cover_url, lancado_em, artistas_id},{where:{id}})
        res.status(202).json({data})
    } catch (error) {
        res.status(500).send({ error: 'erro ao atualizar o album' })
    }
}