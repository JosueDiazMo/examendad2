import { Router } from 'express';

const router = Router();
import * as personasCtrl from '../controllers/personas.controller'

router.get('/', personasCtrl.getPersonas);
router.post('/', personasCtrl.crearPersonas);

export default router;