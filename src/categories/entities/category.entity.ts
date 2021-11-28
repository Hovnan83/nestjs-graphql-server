import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Product } from "src/products/entities/product.entity";

@ObjectType()
export class Category {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field((type) => [Product], { nullable: true })
  products?: Product[];
}
