import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class LineItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data) {
    return this.prismaService.lineItem.createMany({ data });
  }

  findAllLineItems(orderId) {
    return this.prismaService.lineItem.findMany({
      where: { orderId },
    });
  }
}
