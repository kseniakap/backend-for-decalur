"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnReviewObject = void 0;
const return_user_object_1 = require("../user/return-user.object");
exports.returnReviewObject = {
    id: true,
    user: {
        select: return_user_object_1.returnUserObject
    },
    createdAt: true,
    text: true,
    rating: true
};
//# sourceMappingURL=return-review.object.js.map