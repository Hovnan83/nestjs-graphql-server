import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CategoriesService } from "src/categories/categories.service";
import { Category } from "src/categories/entities/category.entity";

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoryService: CategoriesService
  ) {}

  @Query(() => [Product], { name: "products" })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: "findProductBySlug" })
  filter(@Args("slug", { type: () => String }) slug: string) {
    return this.productsService.findBySlug(slug);
  }

  @Query(() => Product, { name: "product" })
  findOne(@Args("id", { type: () => Number }) id: number) {
    return this.productsService.findOne(id);
  }

  @ResolveField((returns) => Category, { name: "category" })
  async getCategory(@Parent() product: Product) {
    const { categoryId } = product;

    return this.categoryService.findOne(categoryId);
  }
}
