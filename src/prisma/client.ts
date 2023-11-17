import { PrismaClient as PrismaClientAngular } from '../../prisma-schema/prisma/generated/prisma-client-angular/index.js';

export const writeClient = new PrismaClientAngular({
    datasources: {
        db: {
            url: `${process.env.ANGULAR_DATABASE_URL}`
        }
    }
});