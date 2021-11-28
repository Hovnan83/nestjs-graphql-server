import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from "./categories/categories.module";
import { OrdersModule } from "./orders/orders.module";
// import { LineItemsModule } from "./line-items/line-items.module";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from "./users/users.module";
//
//
// OrdersModule,
// LineItemsModule,

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    UsersModule,
    OrdersModule,
    ProductsModule,
    CategoriesModule,
  ],
  controllers: [], //AppController
  providers: [], //AppService, PrismaService
})
export class AppModule {}
