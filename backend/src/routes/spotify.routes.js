import { Router } from "express";
import * as spotifyController from "../controllers/spotify.controller.js";

const router = Router();

// Rotas de autenticação
router.get("/authorize", spotifyController.authorize);
router.get("/callback", spotifyController.callback);
router.get("/check-connection", spotifyController.checkConnection);
router.post("/disconnect", spotifyController.disconnect);

// Rotas para busca e obtenção de dados
router.get("/search", spotifyController.searchMusic);
router.get("/track/:trackId", spotifyController.getTrackDetails);
router.get("/playlists", spotifyController.getUserPlaylists);
router.get("/playlist/:playlistId/tracks", spotifyController.getPlaylistTracks);

export default router;