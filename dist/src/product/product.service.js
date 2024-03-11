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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("./return-product.object");
const generate_slug_1 = require("../utils/generate-slug");
const get_all_product_dto_1 = require("./dto/get-all.product.dto");
const pagination_service_1 = require("../pagination/pagination.service");
const category_service_1 = require("../category/category.service");
const convert_to_number_1 = require("../utils/convert-to-number");
let ProductService = class ProductService {
    constructor(prisma, paginationService, categoryService) {
        this.prisma = prisma;
        this.paginationService = paginationService;
        this.categoryService = categoryService;
    }
    async getAll(dto = {}) {
        const { perPage, skip } = this.paginationService.getPagination(dto);
        const filters = this.createFilter(dto);
        const products = await this.prisma.product.findMany({
            where: filters,
            orderBy: this.getSortOption(dto.sort),
            skip,
            take: perPage,
            select: return_product_object_1.productReturnObject
        });
        return {
            products,
            length: await this.prisma.product.count({
                where: filters
            })
        };
    }
    createFilter(dto) {
        const filters = [];
        if (dto.searchTerm)
            filters.push(this.getSearchTermFilter(dto.searchTerm));
        if (dto.ratings)
            filters.push(this.getRatingFilter(dto.ratings.split("|").map(rating => +rating)));
        if (dto.minPrice || dto.maxPrice)
            filters.push(this.getPriceFilter((0, convert_to_number_1.convertToNumber)(dto.minPrice), (0, convert_to_number_1.convertToNumber)(dto.maxPrice)));
        if (dto.categoryId)
            filters.push(this.getCategoryFilter(+dto.categoryId));
        return filters.length ? { AND: filters } : {};
    }
    getSortOption(sort) {
        switch (sort) {
            case get_all_product_dto_1.EnumProductSort.LOW_PRICE:
                return [{ price: "asc" }];
            case get_all_product_dto_1.EnumProductSort.HIGH_PRICE:
                return [{ price: "desc" }];
            case get_all_product_dto_1.EnumProductSort.OLDEST:
                return [{ createdAt: "asc" }];
            default:
                return [{ createdAt: "desc" }];
        }
    }
    getSearchTermFilter(searchTerm) {
        return {
            OR: [
                {
                    category: {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    }
                },
                {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            ]
        };
    }
    getRatingFilter(ratings) {
        return {
            reviews: {
                some: {
                    rating: {
                        in: ratings
                    }
                }
            }
        };
    }
    getPriceFilter(minPrice, maxPrice) {
        let priceFilter = undefined;
        if (minPrice) {
            priceFilter = {
                ...priceFilter,
                gte: minPrice
            };
        }
        if (maxPrice) {
            priceFilter = {
                ...priceFilter,
                lte: maxPrice
            };
        }
        return {
            price: priceFilter
        };
    }
    getCategoryFilter(categoryId) {
        return {
            categoryId
        };
    }
    async byId(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: return_product_object_1.productReturnObjectFullest
        });
        if (!product) {
            throw new Error("Product not fount");
        }
        return product;
    }
    async bySlug(slug) {
        const product = await this.prisma.product.findUnique({
            where: {
                slug
            },
            select: return_product_object_1.productReturnObjectFullest
        });
        if (!product) {
            throw new common_1.NotFoundException("Product not fount");
        }
        return product;
    }
    async byCategory(categorySlug) {
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    slug: categorySlug
                }
            },
            select: return_product_object_1.productReturnObjectFullest
        });
        if (!products) {
            throw new common_1.NotFoundException("Products not fount");
        }
        return products;
    }
    async getSimilar(id) {
        const currentProduct = await this.byId(id);
        if (!currentProduct) {
            throw new common_1.NotFoundException("Current product not fount");
        }
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    name: currentProduct.category.name
                },
                NOT: {
                    id: currentProduct.id
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            select: return_product_object_1.productReturnObject
        });
        return products;
    }
    async create(dto) {
        const product = await this.prisma.product.create({
            data: {
                ...dto,
                price: Number(dto.price),
                categoryId: Number(dto.categoryId),
                slug: (0, generate_slug_1.generateSlug)(dto.name),
            },
        });
        return product.id;
    }
    async update(id, dto) {
        const { description, price, categoryId, measure } = dto;
        return this.prisma.product.update({
            where: {
                id
            },
            data: {
                description,
                price: +price,
                measure,
                categoryId: +categoryId
            }
        });
    }
    async delete(id) {
        return this.prisma.product.delete({
            where: {
                id
            }
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagination_service_1.PaginationService,
        category_service_1.CategoryService])
], ProductService);
//# sourceMappingURL=product.service.js.map