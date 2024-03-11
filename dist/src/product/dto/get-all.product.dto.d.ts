import { PaginationDto } from "src/pagination/pagination.dto";
export declare enum EnumProductSort {
    HIGH_PRICE = "high-price",
    LOW_PRICE = "low-price",
    NEWEST = "newest",
    OLDEST = "oldest"
}
export declare class GetAllProductDto extends PaginationDto {
    sort?: EnumProductSort;
    searchTerm?: string;
    ratings?: string;
    minPrice?: string;
    maxPrice?: string;
    categoryId?: string;
}
