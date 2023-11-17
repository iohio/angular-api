import { employee } from '../../prisma-schema/prisma/generated/prisma-client-angular';
import { writeClient } from '../prisma/client.js';
import { v4 } from 'uuid';

export const getEmployee = async () => {
    const result = await writeClient.employee.findMany()
    return result
}

export const deleteEmployee = async (id: any) => {
    try {
        await writeClient.employee.delete({
            where: {
                id
            }
        });
        return 'delete data success'
    } catch (error) {
        console.log(error)
        return error
    }
}

export const addEmployee = async (createData: any) => {
    try {
        const dateNow = new Date();
        let addDate = {
            uuid: v4(),
            ...createData,
            created_date: dateNow,
            updated_date: dateNow
        }
        await writeClient.employee.create({
            data: addDate
        })

        return 'add data success'
    } catch (error) {
        return error
    }
}

export const updateEmployee = async (id: number, updateData: any) => {
    try {
        const dateNow = new Date();
        let addDate = {
            ...updateData,
            updated_date: dateNow
        }
        await writeClient.employee.update({
            where: {
                id
            },
            data: addDate
        })

        return 'add data success'
    } catch (error) {
        return error
    }
}
