import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  create({ userId, createLineItemInputs }) {
    const totalPrice = createLineItemInputs.reduce(
      (acc, cur) => (acc += cur.quantity * cur.price),
      0
    );
    return this.prismaService.order.create({
      include: {
        lineItems: true,
      },
      data: {
        userId,
        totalPrice,
        lineItems: {
          create: createLineItemInputs,
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  findAllOrders(userId: number) {
    return this.prismaService.order.findMany({
      where: { userId },
    });
  }
}
