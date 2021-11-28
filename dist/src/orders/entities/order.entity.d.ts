import { LineItem } from "src/line-items/entities/line-item.entity";
import { User } from "src/users/entities/user.entity";
export declare class Order {
    id: number;
    totalPrice: number;
    userId: number;
    lineItems?: LineItem[];
    user: User;
}
