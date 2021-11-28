import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { PrismaService } from "src/prisma.service";
import { OrdersService } from "src/orders/orders.service";

@Module({
  providers: [UsersResolver, UsersService, PrismaService, OrdersService],
})
export class UsersModule {}
