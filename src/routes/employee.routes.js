import { Router } from "express";
import { getEmployees,getEmployee,createEmployees,updateEmployees,deleteEmployees} from '../controllers/employee.controller.js';

const router = Router();
/*End points
get - Obtener
post - Insertar
put - Actualizar
delete - Eliminar
*/ 
router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployee)//para generar una consulta por medio de un id

router.post('/employees',createEmployees)

router.patch('/employees/:id',updateEmployees)

router.delete('/employees/:id',deleteEmployees)


export default router;