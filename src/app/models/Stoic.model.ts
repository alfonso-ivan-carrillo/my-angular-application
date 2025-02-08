export interface Stoic {
    id: number;
    name: string;
    description: string;
    category: string;
}

export interface StoicImage {
    stoicId: number;
    imageUrl: string;
    caption: string;
}