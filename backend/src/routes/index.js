import { Router } from 'express';
import tonsRoutes from './tons.routes.js';
import playlistRoutes from './playlists.routes.js'
import artistaRoutes from './artistas.routes.js'

const router = Router();

router.use('/tom', tonsRoutes);
router.use('/playlist', playlistRoutes);
router.use('/artista', artistaRoutes);

export default router;