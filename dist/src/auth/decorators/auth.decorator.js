"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../guards/jwt.guard");
const admin_guard_1 = require("../guards/admin.guard");
const Auth = (role = "user") => (0, common_1.applyDecorators)(role === "admin"
    ? (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, admin_guard_1.OnlyAdminGuard)
    : (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard));
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map