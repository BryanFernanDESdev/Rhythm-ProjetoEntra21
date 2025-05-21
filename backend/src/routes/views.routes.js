import { Router } from "express";
import { getArtists, getPlaylist } from "../controllers/views.controller.js";
const router = Router()

router.get('/playlist', getPlaylist)
router.get('/artist', getArtists)

export default router