import models from "../models/index.js"

export const getTom = async (req, res) => {
    try {
        const data = await models.Tom.findAll();
        res.status(200).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}
export const getTomById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await models.Tom.findAll({ where: { id } })
        res.status(200).send(data)
    } catch (error) {
        res.status(401).send(error)
    }
}
