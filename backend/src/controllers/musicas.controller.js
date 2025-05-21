import models from "../models/index.js"

export const getSong = async (req,res) => {
    try {
        const data = await models.Musica.findAll()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error})
    }
}
export const getSongById = async (req,res) => {
    try {
        const id = req.params.id
        const data = await models.Musica.findAll({where:{id}})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({error})
    }
}