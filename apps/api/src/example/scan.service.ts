// import { ScanCreate } from "@app/contracts";
// import { Injectable, NotFoundException } from '@nestjs/common';
//
// @Injectable()
// export class ScanService {
//     constructor(
//         private readonly scanRepository: ScanRepository,
//     ) {
//     }
//
//     findAll() {
//         return this.scanRepository.getAll();
//     }
//
//     async findOne(scanId: string) {
//         const scan = await this.scanRepository.findOne(scanId);
//         if (!scan)
//             throw new NotFoundException(`Скан с id=${scanId} не найден`);
//
//         return scan;
//     }
//
//     async create(
//         createScanDto: ScanCreate.Request,
//     ) {
//         const scanEntity = new ScanEntity(
//             createScanDto
//         );
//
//         // Save scan to db
//         const result = await this.scanRepository.create(scanEntity);
//         scanEntity.id = result.id;
//
//         return result;
//     }
// }
