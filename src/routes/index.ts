import { Router } from 'express';
import employeeRounte from '../routes/employee/index.js'
const routes = Router();

routes.use('/employees',employeeRounte)

export default routes;
