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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../../orders/entities/order.entity");
const product_entity_1 = require("../../products/entities/product.entity");
let LineItem = class LineItem {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], LineItem.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], LineItem.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], LineItem.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => order_entity_1.Order),
    __metadata("design:type", order_entity_1.Order)
], LineItem.prototype, "order", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], LineItem.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)((type) => product_entity_1.Product),
    __metadata("design:type", product_entity_1.Product)
], LineItem.prototype, "product", void 0);
LineItem = __decorate([
    (0, graphql_1.ObjectType)()
], LineItem);
exports.LineItem = LineItem;
//# sourceMappingURL=line-item.entity.js.map