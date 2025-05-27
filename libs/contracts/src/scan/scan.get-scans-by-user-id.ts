import { microserviceUrls } from "@app/config/microservice-urls";
import { Scan } from "@app/interfaces";

export namespace ScanGetScansByUserId {
    export const url = microserviceUrls.scan + "/users";

    export function getUrl(userId: string): string {
        return `${url}/${userId}/scans`;
    }

    export class Request {

    }

    export class Response {
        scans: Scan[];
    }
}
