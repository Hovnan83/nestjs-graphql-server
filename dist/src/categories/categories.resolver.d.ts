import { ProductsService } from "src/products/products.service";
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";
export declare class CategoriesResolver {
    private readonly categoriesService;
    private readonly productsService;
    constructor(categoriesService: CategoriesService, productsService: ProductsService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    filter(slug: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    getProducts(category: Category): Promise<import(".prisma/client").Product[]>;
}
