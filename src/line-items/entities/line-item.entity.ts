import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Order } from "src/orders/entities/order.entity";
import { Product } from "src/products/entities/product.entity";

@ObjectType()
export class LineItem {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Int)
  orderId: number;

  @Field((type) => Order)
  order: Order;

  @Field((type) => Int)
  productId: number;

  @Field((type) => Product)
  product: Product;
}
