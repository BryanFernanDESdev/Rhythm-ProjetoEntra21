import { Router } from "express";
const router = Router()
import { getAlbum, getAlbumById } from '../controllers/albuns.controller.js'

router.get('/', getAlbum)
router.get('/:id', getAlbumById)

export default router