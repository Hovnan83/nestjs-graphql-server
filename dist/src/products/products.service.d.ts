import { PrismaService } from "src/prisma.service";
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findBySlug(slug: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findAllProducts(categoryId: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
}
