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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const faker_1 = require("@faker-js/faker");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, userService) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.userService = userService;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async getNewTokens(refreshToken) {
        const result = await this.jwt.verifyAsync(refreshToken);
        if (!result)
            throw new common_1.UnauthorizedException("Invalid referesh token");
        const user = await this.userService.byId(result.id, {
            isAdmin: true
        });
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async register(dto) {
        const existUser = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });
        if (existUser)
            throw new common_1.BadRequestException("User already exists");
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                name: "",
                avatarPath: faker_1.faker.image.avatar(),
                phone: "",
                password: await argon2.hash(dto.password)
            }
        });
        const tokens = await this.issueTokens(user.id);
        return {
            user: this.returnUserFields(user),
            ...tokens
        };
    }
    async issueTokens(userId) {
        const data = { id: userId };
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h'
        });
        const refreshToken = this.jwt.sign(data, {
            expiresIn: '7d'
        });
        return { accessToken, refreshToken };
    }
    returnUserFields(user) {
        return {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        };
    }
    async validateUser(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        const isValid = await argon2.verify(user.password, dto.password);
        if (!isValid)
            throw new common_1.UnauthorizedException("Invalid password ");
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService,
        user_service_1.UserService])
], AuthService);
//# sourceMappingURL=auth.service.js.map