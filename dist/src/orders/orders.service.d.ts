import { PrismaService } from "src/prisma.service";
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create({ userId, createLineItemInputs }: {
        userId: any;
        createLineItemInputs: any;
    }): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order & {
        lineItems: import(".prisma/client").LineItem[];
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__OrderClient<import(".prisma/client").Order>;
    findAllOrders(userId: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Order[]>;
}
