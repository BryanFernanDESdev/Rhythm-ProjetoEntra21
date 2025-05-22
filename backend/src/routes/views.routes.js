import { Router } from "express";
import { getArtists, getPlaylist, getPlaylistById } from "../controllers/views.controller.js";
const router = Router()

router.get('/playlist', getPlaylist)
router.get('/playlist/:id', getPlaylistById)
router.get('/artist', getArtists)

export default router