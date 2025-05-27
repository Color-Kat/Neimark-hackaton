import { microserviceUrls } from "@app/config/microservice-urls";
import { Scan } from "@app/interfaces";

export namespace ScanGetScans {
    export const url = microserviceUrls.scan + "/scans";

    export class Request {

    }

    export class Response {
        scans: Scan[];
    }
}
