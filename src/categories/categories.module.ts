import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesResolver } from "./categories.resolver";
import { PrismaService } from "src/prisma.service";
import { ProductsService } from "src/products/products.service";

@Module({
  providers: [
    CategoriesResolver,
    CategoriesService,
    ProductsService,
    PrismaService,
  ],
})
export class CategoriesModule {}
