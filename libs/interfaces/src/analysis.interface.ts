import {Ingredient} from "@app/interfaces/ingredient.interface";
import {ScanType} from "@app/interfaces/scan.interface";

export type Analysis = FoodAnalysis | CosmeticAnalysis;

export type FoodAnalysis = {
    type: ScanType.FOOD;

    additivesDangerIndex: number;
    healthIndex: number;
    ingredients: Ingredient[];
    hasSugar: boolean;
    hasColoring: boolean;
    hasFlavors: boolean;
    hasPreservatives: boolean;
    allergens: string[];
}

export interface CosmeticAnalysis {
    type: ScanType.COSMETIC;
}