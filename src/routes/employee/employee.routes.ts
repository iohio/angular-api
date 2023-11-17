import { Router, Request, Response } from 'express';
import {getEmployee, addEmployee, deleteEmployee, updateEmployee} from '../../service/employee.service.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const result = await getEmployee();
        return res.json(result)
    } catch (error) {
        return res.status(500).json('Internal Error')
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const data:any = req.body;
        const result = await addEmployee(data);
        return res.json(result)
    } catch (error) {
        return res.status(500).json('Internal Error')
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    try {
        const id:number = Number(req.params.id);
        const data:any = req.body;
        const result = await updateEmployee(id, data);
        return res.json(result)
    } catch (error) {
        return res.status(500).json('Internal Error')
    }
});

router.delete("/:id",async (req: Request, res: Response) => {
    try {
        const data:number = Number(req.params.id);
        const result = await deleteEmployee(data);
        return res.json(result)
    } catch (error) {
        return res.status(500).json('Internal Error')
    }
})

export default router;
