"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReturnObjectFullest = exports.orderReturnObject = exports.productReturnObject = void 0;
const return_review_object_1 = require("../review/return-review.object");
const return_category_object_1 = require("../category/return-category.object");
exports.productReturnObject = {
    images: true,
    description: true,
    id: true,
    name: true,
    price: true,
    measure: true,
    createdAt: true,
    slug: true,
    category: {
        select: return_category_object_1.returnCategoryObject
    },
    reviews: {
        select: return_review_object_1.returnReviewObject,
        orderBy: {
            createdAt: "desc"
        }
    },
};
exports.orderReturnObject = {
    images: true,
    id: true,
    name: true,
    price: true,
};
exports.productReturnObjectFullest = {
    ...exports.productReturnObject,
};
//# sourceMappingURL=return-product.object.js.map