import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { Order } from "src/orders/entities/order.entity";
import { OrdersService } from "src/orders/orders.service";

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly ordersService: OrdersService
  ) {}

  @Mutation(() => User, { name: "register" })
  create(@Args("email") email: string, @Args("password") password: string) {
    //must hash the password for saving in DB
    return this.usersService.create({ email, password });
  }

  @Query(() => String, { name: "login" })
  async checkUser(
    @Args("email") email: string,
    @Args("password") password: string
  ) {
    const user = await this.usersService.checkUser(email);
    //must compare hashed passwords
    if (!user || (user && user.password !== password)) {
      return "Wrong credentials"!;
    }
    return this.usersService.createToken(user.id, user.email);
  }

  @Query(() => User, { name: "profile" })
  @UseGuards(new AuthGuard())
  async profile(@Context("user") user: User) {
    const userObject = this.usersService.findOne(user.id);

    return userObject;
  }

  @ResolveField((returns) => [Order], { name: "orders" })
  async getOrders(@Parent() user: User) {
    const { id } = user;

    return this.ordersService.findAllOrders(id);
  }
}
