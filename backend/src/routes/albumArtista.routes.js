import { Router } from "express";
import { getAlbumArtista } from "../controllers/albumArtista.controller.js";
const router = Router()

router.get('/', getAlbumArtista)
router.get('/:album_id', getAlbumArtista)

export default router