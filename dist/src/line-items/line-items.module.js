"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemsModule = void 0;
const common_1 = require("@nestjs/common");
const line_items_service_1 = require("./line-items.service");
const line_items_resolver_1 = require("./line-items.resolver");
const products_service_1 = require("../products/products.service");
const orders_service_1 = require("../orders/orders.service");
let LineItemsModule = class LineItemsModule {
};
LineItemsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            line_items_resolver_1.LineItemsResolver,
            line_items_service_1.LineItemsService,
            products_service_1.ProductsService,
            orders_service_1.OrdersService,
        ],
    })
], LineItemsModule);
exports.LineItemsModule = LineItemsModule;
//# sourceMappingURL=line-items.module.js.map