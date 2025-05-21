import models from "../models/index.js"

export const getAlbum = async (req, res)=>{
    try {
        const data = await models.Album.findAll();
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error})
    }
}

export const getAlbumById = async (req, res)=>{
    try {
        const id = req.params.id;
        const data = await models.Album.findAll({where:{id}});
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error})
    }
}

