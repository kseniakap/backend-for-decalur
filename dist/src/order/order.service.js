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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("../product/return-product.object");
const return_user_object_1 = require("../user/return-user.object");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrderById(id) {
        const product = await this.prisma.order.findUnique({
            where: {
                id
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.orderReturnObject
                        }
                    }
                },
            }
        });
        if (!product) {
            throw new Error("Product not fount");
        }
        return product;
    }
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                user: {
                    select: return_user_object_1.returnUserObject
                },
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.orderReturnObject
                        }
                    }
                },
            }
        });
    }
    async getByUserId(userId) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.productReturnObject
                        }
                    }
                }
            }
        });
    }
    async placeOrder(dto, userId) {
        const total = dto.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        const order = this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: dto.items
                },
                total,
                user: {
                    connect: {
                        id: userId
                    }
                },
            }
        });
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map