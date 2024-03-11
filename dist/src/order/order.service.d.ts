import { PrismaService } from 'src/prisma.service';
import { OrderDto } from './order.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getOrderById(id: number): Promise<{
        items: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string;
                price: number;
                measure: string;
                images: string[];
                categoryId: number;
                userId: number;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: number;
                    productId: number;
                }[];
                category: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    images: string;
                };
                user: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    password: string;
                    name: string;
                    avatarPath: string;
                    phone: string;
                    isAdmin: boolean;
                    address: string;
                };
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    rating: number;
                    text: string;
                    userId: number;
                    productId: number;
                }[];
                _count: {
                    orderItems: number;
                    category: number;
                    user: number;
                    reviews: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    }>;
    getAll(): Promise<({
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            reviews: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                rating: number;
                text: string;
                userId: number;
                productId: number;
            }[];
            _count: {
                orders: number;
                favorites: number;
                reviews: number;
            };
            email: string;
            password: string;
            avatarPath: string;
            phone: string;
            isAdmin: boolean;
            address: string;
            orders: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                status: import(".prisma/client").$Enums.EnumOrderStatus;
                total: number;
                userId: number;
            }[];
            favorites: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string;
                price: number;
                measure: string;
                images: string[];
                categoryId: number;
                userId: number;
            }[];
        };
        items: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string;
                price: number;
                measure: string;
                images: string[];
                categoryId: number;
                userId: number;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: number;
                    productId: number;
                }[];
                category: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    images: string;
                };
                user: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    password: string;
                    name: string;
                    avatarPath: string;
                    phone: string;
                    isAdmin: boolean;
                    address: string;
                };
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    rating: number;
                    text: string;
                    userId: number;
                    productId: number;
                }[];
                _count: {
                    orderItems: number;
                    category: number;
                    user: number;
                    reviews: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    })[]>;
    getByUserId(userId: number): Promise<({
        items: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string;
                price: number;
                measure: string;
                images: string[];
                categoryId: number;
                userId: number;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: number;
                    productId: number;
                }[];
                category: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    images: string;
                };
                user: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    password: string;
                    name: string;
                    avatarPath: string;
                    phone: string;
                    isAdmin: boolean;
                    address: string;
                };
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    rating: number;
                    text: string;
                    userId: number;
                    productId: number;
                }[];
                _count: {
                    orderItems: number;
                    category: number;
                    user: number;
                    reviews: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    })[]>;
    placeOrder(dto: OrderDto, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        total: number;
        userId: number;
    }>;
}
