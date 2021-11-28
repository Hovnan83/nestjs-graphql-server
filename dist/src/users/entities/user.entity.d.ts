import { Order } from "src/orders/entities/order.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    orders?: Order[];
}
