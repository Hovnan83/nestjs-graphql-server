import { Field, Int, ObjectType } from "@nestjs/graphql";
import { LineItem } from "src/line-items/entities/line-item.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class Order {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  totalPrice: number;

  @Field((type) => Int)
  userId: number;

  @Field((type) => [LineItem], { nullable: true })
  lineItems?: LineItem[];

  @Field((type) => User)
  user: User;
}
