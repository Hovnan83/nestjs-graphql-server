import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  findBySlug(slug: string) {
    const product = this.prismaService.product.findUnique({
      where: { slug },
    });
    //if (!product) throw new Error("Product notfound");
    return product;
  }

  findAllProducts(categoryId: number) {
    return this.prismaService.product.findMany({
      where: { categoryId },
    });
  }
}
