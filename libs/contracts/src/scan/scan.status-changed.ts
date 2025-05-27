export namespace ScanStatusChanged {
    export const topic = "scan.status-changed.event";

    export const Statuses = {
        INITIAL: 'initial',
        UPLOADING: 'uploading',
        CREATED: 'created',
        RECOGNITION_PENDING: 'recognition_pending',
        RECOGNIZING: 'recognizing',
        RECOGNITION_FAILED: 'recognition_failed',
        RECOGNIZED: 'recognized',
        ANALYSIS_PENDING: 'analysis_pending',
        ANALYZING: 'analyzing',
        ANALYSIS_FAILED: 'analysis_failed',
        ANALYZED: 'analyzed',
        COMPLETED: 'completed',
        FAILED: 'failed', // TODO implement retries and failed status
    } as const;

    export type Statuses = typeof Statuses[keyof typeof Statuses];

    export class Payload {
        scanId: string;
        status: Statuses;
    }
}
