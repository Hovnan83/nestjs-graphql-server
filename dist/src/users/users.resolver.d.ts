import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { OrdersService } from "src/orders/orders.service";
export declare class UsersResolver {
    private readonly usersService;
    private readonly ordersService;
    constructor(usersService: UsersService, ordersService: OrdersService);
    create(email: string, password: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    checkUser(email: string, password: string): Promise<any>;
    profile(user: User): Promise<import(".prisma/client").User>;
    getOrders(user: User): Promise<import(".prisma/client").Order[]>;
}
