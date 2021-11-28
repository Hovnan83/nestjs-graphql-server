import { Resolver, Parent, ResolveField } from "@nestjs/graphql";
import { Order } from "src/orders/entities/order.entity";
import { OrdersService } from "src/orders/orders.service";
import { Product } from "src/products/entities/product.entity";
import { ProductsService } from "src/products/products.service";
import { LineItem } from "./entities/line-item.entity";

@Resolver((of) => LineItem)
export class LineItemsResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService
  ) {}

  @ResolveField((returns) => Order, { name: "order" })
  async getOrder(@Parent() lineItem: LineItem) {
    const { orderId } = lineItem;

    return await this.ordersService.findOne(orderId);
  }

  @ResolveField((returns) => Product, { name: "product" })
  async getProduct(@Parent() lineItem: LineItem) {
    const { productId } = lineItem;

    return await this.productsService.findOne(productId);
  }
}
