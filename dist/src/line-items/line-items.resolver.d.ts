import { OrdersService } from "src/orders/orders.service";
import { ProductsService } from "src/products/products.service";
import { LineItem } from "./entities/line-item.entity";
export declare class LineItemsResolver {
    private readonly productsService;
    private readonly ordersService;
    constructor(productsService: ProductsService, ordersService: OrdersService);
    getOrder(lineItem: LineItem): Promise<import(".prisma/client").Order>;
    getProduct(lineItem: LineItem): Promise<import(".prisma/client").Product>;
}
