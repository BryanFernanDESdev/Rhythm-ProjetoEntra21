import { Router } from "express";
const router = Router()
import { createAlbum, deleteAlbum, getAlbum, getAlbumById, updateAlbum } from '../controllers/albuns.controller.js'

router.get('/', getAlbum)
router.get('/:id', getAlbumById)
router.post('/', createAlbum)
router.post('/:id', deleteAlbum)
router.put('/:id', updateAlbum)

export default router