import { Analysis } from "@app/interfaces/analysis.interface";

export enum ScanType {
    FOOD = 'food',
    COSMETIC = 'cosmetic',
}

export enum ScanStatus {
    CREATED = "created",
    RECOGNITION_FAILED = "recognition_failed",
    RECOGNIZED = "recognized",
    ANALYSIS_FAILED = "analysis_failed",
    COMPLETED = "completed",
}

export interface Scan {
    id: string
    userId: string;

    type: ScanType;
    status: ScanStatus
    name: string | null;
    photoUrl: string | null;
    composition: string | null;
    ingredients: string[];
    analysis: Analysis | null;

    updatedAt?: Date | string;
    createdAt?: Date | string;
}