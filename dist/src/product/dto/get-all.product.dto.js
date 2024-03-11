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
exports.GetAllProductDto = exports.EnumProductSort = void 0;
const class_validator_1 = require("class-validator");
const pagination_dto_1 = require("../../pagination/pagination.dto");
var EnumProductSort;
(function (EnumProductSort) {
    EnumProductSort["HIGH_PRICE"] = "high-price";
    EnumProductSort["LOW_PRICE"] = "low-price";
    EnumProductSort["NEWEST"] = "newest";
    EnumProductSort["OLDEST"] = "oldest";
})(EnumProductSort || (exports.EnumProductSort = EnumProductSort = {}));
class GetAllProductDto extends pagination_dto_1.PaginationDto {
}
exports.GetAllProductDto = GetAllProductDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(EnumProductSort),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "searchTerm", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "ratings", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "minPrice", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "maxPrice", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllProductDto.prototype, "categoryId", void 0);
//# sourceMappingURL=get-all.product.dto.js.map