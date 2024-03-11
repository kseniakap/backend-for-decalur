"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModule = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const review_controller_1 = require("./review.controller");
const prisma_service_1 = require("../prisma.service");
const product_service_1 = require("../product/product.service");
const product_module_1 = require("../product/product.module");
const pagination_module_1 = require("../pagination/pagination.module");
const category_module_1 = require("../category/category.module");
let ReviewModule = class ReviewModule {
};
exports.ReviewModule = ReviewModule;
exports.ReviewModule = ReviewModule = __decorate([
    (0, common_1.Module)({
        controllers: [review_controller_1.ReviewController],
        providers: [review_service_1.ReviewService, prisma_service_1.PrismaService, product_service_1.ProductService],
        imports: [product_module_1.ProductModule, pagination_module_1.PaginationModule, category_module_1.CategoryModule]
    })
], ReviewModule);
//# sourceMappingURL=review.module.js.map