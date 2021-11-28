import { UseGuards } from "@nestjs/common";
import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from "@nestjs/graphql";
import { LineItem } from "src/line-items/entities/line-item.entity";
import { LineItemsService } from "src/line-items/line-items.service";
import { AuthGuard } from "src/users/auth.guard";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import { CreateLineItemInput } from "../line-items/dto/create-line-item.input";
import { Order } from "./entities/order.entity";
import { OrdersService } from "./orders.service";

@Resolver(() => Order)
export class OrdersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly ordersService: OrdersService,
    private readonly lineItemsService: LineItemsService
  ) {}

  @UseGuards(new AuthGuard())
  @Mutation((returns) => Order)
  async createOrder(
    @Context("user") user: User,
    @Args({ name: "createLineItemInputs", type: () => [CreateLineItemInput] })
    createLineItemInputs: CreateLineItemInput[]
  ) {
    return await this.ordersService.create({
      userId: user.id,
      createLineItemInputs,
    });
  }

  @ResolveField((returns) => User, { name: "user" })
  async getUser(@Parent() order: Order) {
    const { userId } = order;
    return this.usersService.findOne(userId);
  }

  @ResolveField((returns) => [LineItem], { name: "lineItems" })
  async getLineItems(@Parent() order: Order) {
    const { id } = order;
    return this.lineItemsService.findAllLineItems(id);
  }
}
