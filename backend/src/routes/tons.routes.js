import { Router } from 'express';
import { getTom, getTomById} from '../controllers/tons.controller.js';

const router = Router();

router.get('/', getTom);
router.get('/:id', getTomById);
router.get('/:id', getTomById);

export default router;