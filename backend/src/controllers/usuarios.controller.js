import { where } from "sequelize";
import models from "../models/index.js"

export const getUsers = async (req, res) => {
    try {
        const data = await models.Usuario.findAll();
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send({ error })
    }
}

export const getUsersById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) res.status(400).send({ msg: 'id não pode ser nulo' })
        const data = await models.Usuario.findAll({
            where: {
                id
            }
        });
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({ error })
    }
}

