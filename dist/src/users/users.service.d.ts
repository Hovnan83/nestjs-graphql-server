import { PrismaService } from "src/prisma.service";
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createToken(id: any, email: any): any;
    create(data: any): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    checkUser(email: any): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
