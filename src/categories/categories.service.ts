import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: number) {
    return this.prismaService.category.findUnique({
      where: { id },
    });
  }

  findBySlug(slug: string) {
    return this.prismaService.category.findUnique({ where: { slug } });
  }
}
