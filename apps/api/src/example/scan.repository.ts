// import { Scan } from "@app/interfaces";
// import { Injectable } from '@nestjs/common';
// import { PrismaService } from "../database/prisma.service";
//
// // type SafeScanEntity = ScanEntity & {analysis: object};
//
// @Injectable()
// export class ScanRepository {
//     constructor(private readonly prismaService: PrismaService) {
//     }
//
//     async getAll() {
//         return this.prismaService.scan.findMany() as Promise<Scan[]>;
//     }
//
//     async findOne(id: string) {
//         return this.prismaService.scan.findUnique({
//             where: {
//                 id
//             }
//         }) as Promise<Scan>;
//     }
//
//     async findAllByUserId(userId: string) {
//         return this.prismaService.scan.findMany({
//             where: {
//                 userId: userId
//             },
//             orderBy: {
//                 createdAt: 'desc'
//             }
//         }) as Promise<Scan[]>;
//     }
//
//     async create(data: ScanEntity) {
//         return this.prismaService.scan.create({
//             data: data as SafeScanEntity
//         }) as Promise<Scan>;
//     }
//
//     async update(data: ScanEntity) {
//         return this.prismaService.scan.update({
//             where: {id: data.id},
//             data: data as SafeScanEntity
//         }) as Promise<Scan>;
//     }
//
//     async delete(data: ScanEntity) {
//         return this.prismaService.scan.delete({
//             where: {id: data.id},
//         });
//     }
// }
