import { microserviceUrls } from "@app/config/microservice-urls";
import { Scan, ScanType } from "@app/interfaces";
import { IsEnum, IsOptional, IsString } from 'class-validator';

export namespace ScanUpdate {
    export const url = microserviceUrls.scan + "/scans";

    export function getUrl(scanId: string): string {
        return `${url}/${scanId}`;
    }

    export class Request {
        @IsEnum(ScanType)
        @IsOptional()
        type?: ScanType;

        @IsString()
        @IsOptional()
        name?: string;

        @IsOptional()
        @IsString()
        composition?: string;
    }

    export class Response {
        scan: Scan;
    }
}
