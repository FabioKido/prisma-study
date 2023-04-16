import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async () => {
    const pessoa1 = await prisma.pessoa.create({
        data: {
            email: 'prisma@prisma.com',
            name: 'prisma'
        }
    })

    const pessoa2 = await prisma.pessoa.create({
        data: {
            email: 'kido@kido.com',
            name: 'Quido',
            address: {
                create: {
                    street: 'rua da pomba'
                }
            }
        }
    })

    // const pessoas = await prisma.pessoa.findMany({
    //     where: {
    //         name: {
    //             contains: 'ki'
    //         }
    //     }
    // })

    const pessoas = await prisma.pessoa.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            address: true
        }
    })
    console.log(pessoas)
})()