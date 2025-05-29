import { Router } from "express";
import { getSpotifyUser, getSpotifyUserById } from "../controllers/spotifyUser.controller.js";
const router = Router()

router.get('/', getSpotifyUser)
router.get('/:id', getSpotifyUserById)

export default router