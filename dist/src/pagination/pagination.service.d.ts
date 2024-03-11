import { PaginationDto } from './pagination.dto';
export declare class PaginationService {
    getPagination(dto: PaginationDto, defaultPerPage?: number): {
        perPage: number;
        skip: number;
    };
}
