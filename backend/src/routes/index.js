import { Router } from 'express';
import tonsRoutes from './tons.routes.js';

const router = Router();

router.use('/tom', tonsRoutes);

export default router;