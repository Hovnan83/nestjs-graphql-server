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
exports.LineItemsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../orders/entities/order.entity");
const orders_service_1 = require("../orders/orders.service");
const product_entity_1 = require("../products/entities/product.entity");
const products_service_1 = require("../products/products.service");
const line_item_entity_1 = require("./entities/line-item.entity");
let LineItemsResolver = class LineItemsResolver {
    constructor(productsService, ordersService) {
        this.productsService = productsService;
        this.ordersService = ordersService;
    }
    async getOrder(lineItem) {
        const { orderId } = lineItem;
        return await this.ordersService.findOne(orderId);
    }
    async getProduct(lineItem) {
        const { productId } = lineItem;
        return await this.productsService.findOne(productId);
    }
};
__decorate([
    (0, graphql_1.ResolveField)((returns) => order_entity_1.Order, { name: "order" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [line_item_entity_1.LineItem]),
    __metadata("design:returntype", Promise)
], LineItemsResolver.prototype, "getOrder", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => product_entity_1.Product, { name: "product" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [line_item_entity_1.LineItem]),
    __metadata("design:returntype", Promise)
], LineItemsResolver.prototype, "getProduct", null);
LineItemsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => line_item_entity_1.LineItem),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        orders_service_1.OrdersService])
], LineItemsResolver);
exports.LineItemsResolver = LineItemsResolver;
//# sourceMappingURL=line-items.resolver.js.map