import { Router } from "express";
import { getUsers, getUsersById } from "../controllers/usuarios.controller.js";
const router = Router()

router.get('/', getUsers)
router.get('/:id', getUsersById)

export default router