import { Category } from "src/categories/entities/category.entity";
export declare class Product {
    id: number;
    name: string;
    slug: string;
    categoryId: number;
    category: Category;
}
