import {ScanType} from "@app/interfaces";

export namespace ScanCompositionChanged {
    export const topic = "scan.composition-changed.event";

    export class Payload {
        scanId: string;
        type: ScanType;
        composition: string;
    }
}
