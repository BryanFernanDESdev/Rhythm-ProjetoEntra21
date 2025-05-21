import { Router } from "express";
import { getSong, getSongById } from "../controllers/musicas.controller.js";
const router = Router()

router.get('/', getSong)
router.get('/:id', getSongById)

export default router