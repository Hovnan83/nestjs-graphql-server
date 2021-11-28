import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Category } from "src/categories/entities/category.entity";

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field((type) => Int)
  categoryId: number;

  @Field((type) => Category)
  category: Category;
}
