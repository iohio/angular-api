import { Router } from 'express';
import employeeRouter from './employee.routes.js';

const routes = Router();

routes.use('/', employeeRouter);


export default routes;
