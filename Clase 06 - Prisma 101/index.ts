import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async () => {
    try {
        // const camada = await prisma.camada.create({
        //     data: {
        //         nombre: 2717,
        //         dias: "Martes y jueves",
        //         modulo: "Backend"
        //     }
        // })
        // console.log(camada)
        // const allCamadas = await prisma.camada.findMany()
        // console.log(allCamadas)

        // const camadas = await prisma.camada.createMany({
        //     data: [
        //         {
        //             nombre: 2717,
        //             dias: "Martes y jueves",
        //             modulo: "Backend"
        //         },
        //         {
        //             nombre: 2817,
        //             dias: "Martes y jueves",
        //             modulo: "JavaScript"
        //         },
        //     ]
        // })
        // console.log(camadas)

        // const camadaById = await prisma.camada.findUnique({
        //     where: {
        //         id: 1
        //     }
        // })
        // console.log(camadaById)

        // const camadaById = await prisma.camada.findUniqueOrThrow({
        //     where: {
        //         id: 1
        //     }
        // })
        // console.log(camadaById)

        // const camadasDias = await prisma.camada.findMany({
        //     where: {
        //         dias: "Martes y jueves"
        //     }
        // })
        // console.log(camadasDias)

        // const alumno = await prisma.alumno.create({
        //     data: {
        //         nombre: "Juan Perez",
        //         mail: "juan@gmail.com",
        //         edad: 25,
        //         camada: 2717
        //     }
        // })
        // console.log(alumno)


        // const alumnosCamadas = await prisma.alumno.findMany({
        //     where: {
        //         camada: 2717
        //     }
        // })
        // console.log(alumnosCamadas)

        // const allAlumnos = await prisma.alumno.findMany({
        //     include: {
        //         camadas: true
        //     }
        // })
        // console.log(allAlumnos)

        // const allAlumnos = await prisma.alumno.findMany({
        //     select: {
        //         nombre: true,
        //         mail: true,
        //         camadas: {
        //             select: {
        //                 nombre: true,
        //                 dias: true,
        //             }
        //         }
        //     }
        // })
        // console.log(allAlumnos)
    } catch (error) {
        console.log(error)
        prisma.$disconnect()
    } finally {
        prisma.$disconnect()
    }
}

main()