import { Router } from "express";
import {deleteArtista, getArtistas, getArtistasById} from "../controllers/artistas.controller.js"


const router = Router()

router.get('/', getArtistas)
router.get('/:id', getArtistasById)
router.delete('/:id', deleteArtista)

export default router