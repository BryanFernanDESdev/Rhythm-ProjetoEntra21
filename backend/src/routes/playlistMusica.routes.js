import { Router } from "express";
import { getPlaylistMusica, getPlaylistMusicaById } from "../controllers/playlistMusica.controller.js";
const router = Router()

router.get('/', getPlaylistMusica)
router.get('/:id', getPlaylistMusicaById)

export default router