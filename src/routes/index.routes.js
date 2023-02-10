import {Router} from 'express';
import { pingController } from "../controllers/index.controller.js";

const router = Router();
/**
 * prueba de mysql2
 */
router.get('/ping',pingController)


export default router;