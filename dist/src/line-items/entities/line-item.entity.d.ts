import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";
export declare class LineItem {
    id: number;
    quantity: number;
    orderId: number;
    order: Order;
    productId: number;
    product: Product;
}
