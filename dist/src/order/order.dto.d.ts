import { EnumOrderStatus } from "@prisma/client";
export declare class OrderDto {
    status: EnumOrderStatus;
    items: OrderItemDto[];
}
export declare class OrderItemDto {
    quantity: number;
    price: number;
    productId: number;
}
