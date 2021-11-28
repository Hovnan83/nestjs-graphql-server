import { Product } from "src/products/entities/product.entity";
export declare class Category {
    id: number;
    name: string;
    slug: string;
    products?: Product[];
}
