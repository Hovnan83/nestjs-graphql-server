import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrdersResolver } from "./orders.resolver";
import { LineItemsService } from "src/line-items/line-items.service";
import { PrismaService } from "src/prisma.service";
import { UsersService } from "src/users/users.service";

@Module({
  providers: [
    OrdersResolver,
    OrdersService,
    LineItemsService,
    PrismaService,
    UsersService,
  ],
})
export class OrdersModule {}
