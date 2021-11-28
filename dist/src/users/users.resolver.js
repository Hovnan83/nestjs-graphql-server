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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const order_entity_1 = require("../orders/entities/order.entity");
const orders_service_1 = require("../orders/orders.service");
let UsersResolver = class UsersResolver {
    constructor(usersService, ordersService) {
        this.usersService = usersService;
        this.ordersService = ordersService;
    }
    create(email, password) {
        return this.usersService.create({ email, password });
    }
    async checkUser(email, password) {
        const user = await this.usersService.checkUser(email);
        if (!user || (user && user.password !== password)) {
            return "Wrong credentials";
        }
        return this.usersService.createToken(user.id, user.email);
    }
    async profile(user) {
        const userObject = this.usersService.findOne(user.id);
        return userObject;
    }
    async getOrders(user) {
        const { id } = user;
        return this.ordersService.findAllOrders(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User, { name: "register" }),
    __param(0, (0, graphql_1.Args)("email")),
    __param(1, (0, graphql_1.Args)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Query)(() => String, { name: "login" }),
    __param(0, (0, graphql_1.Args)("email")),
    __param(1, (0, graphql_1.Args)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "checkUser", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: "profile" }),
    (0, common_1.UseGuards)(new auth_guard_1.AuthGuard()),
    __param(0, (0, graphql_1.Context)("user")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "profile", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => [order_entity_1.Order], { name: "orders" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getOrders", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        orders_service_1.OrdersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map