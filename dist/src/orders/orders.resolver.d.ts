import { LineItemsService } from "src/line-items/line-items.service";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { CreateLineItemInput } from "../line-items/dto/create-line-item.input";
import { Order } from "./entities/order.entity";
import { OrdersService } from "./orders.service";
export declare class OrdersResolver {
    private readonly usersService;
    private readonly ordersService;
    private readonly lineItemsService;
    constructor(usersService: UsersService, ordersService: OrdersService, lineItemsService: LineItemsService);
    createOrder(user: User, createLineItemInputs: CreateLineItemInput[]): Promise<import(".prisma/client").Order & {
        lineItems: import(".prisma/client").LineItem[];
    }>;
    getUser(order: Order): Promise<import(".prisma/client").User>;
    getLineItems(order: Order): Promise<import(".prisma/client").LineItem[]>;
}
