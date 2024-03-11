import { Prisma } from "@prisma/client";
export declare class ProductDto implements Prisma.ProductUpdateInput {
    name: string;
    price: number;
    measure: string;
    description: string;
    images: string[];
    categoryId: number;
    slug: string;
}
export declare class ProductUpdateDto implements Prisma.ProductUpdateInput {
    price: number;
    measure: string;
    description: string;
    categoryId: number;
}
