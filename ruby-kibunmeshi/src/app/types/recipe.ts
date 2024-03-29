export interface Material {
    id?: number;
    name: string;
    quantity: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface HowTo {
    id: number;
    index: number;
    text: string;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    recipes: Recipe[];
}

export interface Recipe {
    id: number;
    title: string;
    thumbnail_url: string;
    categoryId: number;
    createdAt: string;
    updatedAt: string;
    category: Category;
    materials: Material[];
    how_tos: HowTo[];
}

// MicroCMSのAPIのレスポンスの型を定義

export interface MicoroCmsRecipe {
    id: string;
    title: string;
    thumbnail: {
        url: string;
    };
    category: {
        id: string;
        name: string;
    };
    materials: {
        id: string;
        name: string;
        quantity: string;
    }[];
    howTo: {
        id: string;
        index: number;
        text: string;
    }[];
    createdAt: string;
    updatedAt: string;
}
