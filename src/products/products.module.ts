import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsResolver } from "./products.resolver";
import { PrismaService } from "src/prisma.service";
import { CategoriesService } from "src/categories/categories.service";

@Module({
  providers: [
    ProductsResolver,
    ProductsService,
    CategoriesService,
    PrismaService,
  ],
})
export class ProductsModule {}
