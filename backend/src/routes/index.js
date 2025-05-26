import { Router } from 'express';
import tonsRoutes from './tons.routes.js';
import playlistRoutes from './playlists.routes.js'
import artistaRoutes from './artistas.routes.js'
import viewsRoutes from './views.routes.js'
import usersRoutes from './usuarios.routes.js'
import musicasRoutes from './musicas.routes.js'
import albumRoutes from './albuns.routes.js'
import albumArtistaRoutes from './albumArtista.routes.js'

const router = Router();

router.use('/tom', tonsRoutes);
router.use('/playlist', playlistRoutes);
router.use('/artista', artistaRoutes);
router.use('/views', viewsRoutes)
router.use('/usuarios', usersRoutes)
router.use('/musicas', musicasRoutes)
router.use('/album', albumRoutes)
router.use('/albumArtista', albumArtistaRoutes)

export default router;