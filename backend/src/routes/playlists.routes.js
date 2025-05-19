import { Router } from "express";
import { getPlaylist, getPlaylistById, createPlaylist, updatePlaylist, deletePlaylist } from "../controllers/playlists.controller.js";

const router = Router()

router.get('/', getPlaylist)
router.get('/:id', getPlaylistById)
router.post('/', createPlaylist)
router.put('/:id', updatePlaylist)
router.delete('/:id', deletePlaylist)

export default router