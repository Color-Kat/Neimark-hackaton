// import { ScanUpdate } from "@app/contracts";
// import { ScanGetScan } from "@app/contracts/scan/scan.get-scan";
// import { ScanGetScans } from "@app/contracts/scan/scan.get-scans";
// import { Body, Controller, Get, Param, Patch, } from '@nestjs/common';
// import { ScanService } from './scan.service';
//
// @Controller('scans')
// export class ScanController {
//     constructor(private readonly scanService: ScanService) {
//     }
//
//     @Get()
//     async findAll(): Promise<ScanGetScans.Response> {
//         return {
//             scans: await this.scanService.findAll()
//         };
//     }
//
//     @Get(':scanId')
//     async findOne(@Param('scanId') scanId: string): Promise<ScanGetScan.Response> {
//         return {
//             scan: await this.scanService.findOne(scanId)
//         };
//     }
//
//     // @Post()
//     // @UseInterceptors(FileInterceptor('photo'))
//     // async create(
//     //     @Body() createScanDto: ScanCreate.Request,
//     //     @UploadedFile(
//     //         new ParseFilePipe({
//     //             validators: [
//     //                 new MaxFileSizeValidator({maxSize: 10 * 1024 * 1024}),
//     //                 new FileTypeValidator({fileType: 'image/*'}),
//     //             ],
//     //         }),
//     //     )
//     //     photo: Express.Multer.File,
//     // ): Promise<ScanCreate.Response> {
//     //     return {
//     //         scan: await this.scanService.create(createScanDto, photo)
//     //     };
//     // }
//
//     @Patch(':scanId')
//     async update(
//         @Param('scanId') scanId: string,
//         @Body() updateScanDto: ScanUpdate.Request
//     ): Promise<ScanUpdate.Response> {
//         return {
//             scan: await this.scanService.update(scanId, updateScanDto)
//         };
//     }
// }
