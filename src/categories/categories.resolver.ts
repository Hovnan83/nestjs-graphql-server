import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { Product } from "src/products/entities/product.entity";
import { ProductsService } from "src/products/products.service";
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";

@Resolver((of) => Category)
export class CategoriesResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService
  ) {}

  @Query(() => [Category], { name: "categories" })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: "category" })
  findOne(@Args("id") id: number) {
    return this.categoriesService.findOne(id);
  }

  @Query(() => Category, { name: "findCategoryBySlug" })
  filter(@Args("slug", { type: () => String }) slug: string) {
    return this.categoriesService.findBySlug(slug);
  }

  @ResolveField((returns) => [Product], { name: "products" })
  async getProducts(@Parent() category: Category) {
    const { id } = category;
    return this.productsService.findAllProducts(id);
  }
}
