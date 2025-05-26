import { where } from "sequelize";
import models from "../models/index.js"

export const getAlbumArtista = async (req, res) => {
    try {
        const data = await models.AlbumArtista.findAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const getAlbumArtistaById = async (req, res) => {
    try {
        const album_id = req.params.album_id
        if(album_id) res.status(402).json({msg:'Não é possivel procurar um join sem id'})
        const data = await models.AlbumArtista.findAll({
            where: {
                album_id:album_id
            }
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const createAlbumArtista = async (req,res)=>{
    try {
        const data = req.body
        const query = await models.AlbumArtista.create({data})
        res.status(201).json({query})
    } catch (error) {
        res.status(500).json({ error })
    }
}

