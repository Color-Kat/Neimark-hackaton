import { microserviceUrls } from "@app/config/microservice-urls";
import { Scan, ScanType } from "@app/interfaces/scan.interface";
import { IsEnum, IsOptional, IsString } from 'class-validator';

export namespace ScanCreate {
    export const url = microserviceUrls.scan + "/scans";

    export class Request {
        @IsEnum(ScanType)
        type: ScanType;

        @IsString()
        userId: string;

        // Just for documentation
        // `photo` must be passed in FormData, but validation is in FileInterceptor
        @IsOptional()
        photo: File;
    }

    export class Response {
        scan: Scan;
    }
}
