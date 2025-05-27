import {Analysis} from "@app/interfaces";

export namespace ProductAnalyzerAnalyzed {
    export const topic = "product-analyzer.analyzed.event";

    export class Payload {
        scanId: string;
        analysisResult: Analysis;
    }
}
