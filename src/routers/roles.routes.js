import { Router } from 'express';

const router = Router();
import * as rolesCtrl from '../controllers/roles.controller'

router.get('/', rolesCtrl.getRoles);
router.get('/:id', rolesCtrl.getRolesId);
router.post('/', rolesCtrl.crearRoles);
router.put('/:id', rolesCtrl.updateRoles);
router.delete('/:id', rolesCtrl.deleteRoles);


export default router;