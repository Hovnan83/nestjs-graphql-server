import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Order } from "src/orders/entities/order.entity";

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field((type) => [Order], { nullable: true })
  orders?: Order[];
}
