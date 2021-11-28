import { PrismaService } from "src/prisma.service";
export declare class LineItemsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: any): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
    findAllLineItems(orderId: any): import(".prisma/client").PrismaPromise<import(".prisma/client").LineItem[]>;
}
