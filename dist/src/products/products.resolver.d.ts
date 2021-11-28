import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CategoriesService } from "src/categories/categories.service";
export declare class ProductsResolver {
    private readonly productsService;
    private readonly categoryService;
    constructor(productsService: ProductsService, categoryService: CategoriesService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    filter(slug: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    getCategory(product: Product): Promise<import(".prisma/client").Category>;
}
