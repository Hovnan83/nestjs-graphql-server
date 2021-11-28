import { Module } from "@nestjs/common";
import { LineItemsService } from "./line-items.service";
import { LineItemsResolver } from "./line-items.resolver";
import { ProductsService } from "src/products/products.service";
import { OrdersService } from "src/orders/orders.service";

@Module({
  providers: [
    LineItemsResolver,
    LineItemsService,
    ProductsService,
    OrdersService,
  ],
})
export class LineItemsModule {}
