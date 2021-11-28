"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const line_item_entity_1 = require("../line-items/entities/line-item.entity");
const line_items_service_1 = require("../line-items/line-items.service");
const auth_guard_1 = require("../users/auth.guard");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const create_line_item_input_1 = require("../line-items/dto/create-line-item.input");
const order_entity_1 = require("./entities/order.entity");
const orders_service_1 = require("./orders.service");
let OrdersResolver = class OrdersResolver {
    constructor(usersService, ordersService, lineItemsService) {
        this.usersService = usersService;
        this.ordersService = ordersService;
        this.lineItemsService = lineItemsService;
    }
    async createOrder(user, createLineItemInputs) {
        return await this.ordersService.create({
            userId: user.id,
            createLineItemInputs,
        });
    }
    async getUser(order) {
        const { userId } = order;
        return this.usersService.findOne(userId);
    }
    async getLineItems(order) {
        const { id } = order;
        return this.lineItemsService.findAllLineItems(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    (0, graphql_1.Mutation)((returns) => order_entity_1.Order),
    __param(0, (0, graphql_1.Context)("user")),
    __param(1, (0, graphql_1.Args)({ name: "createLineItemInputs", type: () => [create_line_item_input_1.CreateLineItemInput] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Array]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_entity_1.User, { name: "user" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => [line_item_entity_1.LineItem], { name: "lineItems" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_entity_1.Order]),
    __metadata("design:returntype", Promise)
], OrdersResolver.prototype, "getLineItems", null);
OrdersResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_entity_1.Order),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        orders_service_1.OrdersService,
        line_items_service_1.LineItemsService])
], OrdersResolver);
exports.OrdersResolver = OrdersResolver;
//# sourceMappingURL=orders.resolver.js.map