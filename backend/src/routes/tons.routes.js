import { Router } from 'express';
import { getTom, getTomById, createTom } from '../controllers/tons.controller.js';

const router = Router();

router.get('/', getTom);
router.get('/:id', getTomById);
router.post('/', createTom);

export default router;