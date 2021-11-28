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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entities/product.entity");
const categories_service_1 = require("../categories/categories.service");
const category_entity_1 = require("../categories/entities/category.entity");
let ProductsResolver = class ProductsResolver {
    constructor(productsService, categoryService) {
        this.productsService = productsService;
        this.categoryService = categoryService;
    }
    findAll() {
        return this.productsService.findAll();
    }
    filter(slug) {
        return this.productsService.findBySlug(slug);
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    async getCategory(product) {
        const { categoryId } = product;
        return this.categoryService.findOne(categoryId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: "products" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: "findProductBySlug" }),
    __param(0, (0, graphql_1.Args)("slug", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "filter", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: "product" }),
    __param(0, (0, graphql_1.Args)("id", { type: () => Number })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => category_entity_1.Category, { name: "category" }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getCategory", null);
ProductsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => product_entity_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        categories_service_1.CategoriesService])
], ProductsResolver);
exports.ProductsResolver = ProductsResolver;
//# sourceMappingURL=products.resolver.js.map