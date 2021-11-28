import { PrismaService } from "src/prisma.service";
export declare class CategoriesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    findBySlug(slug: string): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
}
