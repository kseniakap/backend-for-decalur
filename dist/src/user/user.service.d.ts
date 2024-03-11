import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number, selectObject?: Prisma.UserSelect): Promise<{
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
    }>;
    updateProfile(id: number, dto: UserDto): Promise<{
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
    }>;
    toggleFavorite(userId: number, productId: number): Promise<{
        message: string;
    }>;
}
