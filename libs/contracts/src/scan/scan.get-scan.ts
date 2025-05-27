import { microserviceUrls } from "@app/config/microservice-urls";
import { Scan } from "@app/interfaces";

export namespace ScanGetScan {
    export const url = microserviceUrls.scan + "/scans";

    export function getUrl(id: string): string {
        return `${url}/${id}`;
    }

    export class Request {

    }

    export class Response {
        scan: Scan;
    }
}
