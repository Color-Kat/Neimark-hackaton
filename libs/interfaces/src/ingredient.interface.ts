export type Ingredient = {
    id: number;
    code: string;
    name: string | null;
    danger: number;
    origins: string[] | string | null;
    categories: string[] | string | null;
    synonyms: string[] | null;
    description: string | null;
    healthHarm: string | null;
    healthBenefit: string | null;
    usage: string | null;
    legislation: string | null;
    referenceUrl: string | null;
}

export type IngredientsByCode = Record<string, Ingredient>;