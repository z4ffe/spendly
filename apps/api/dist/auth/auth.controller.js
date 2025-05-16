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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const sessions_service_1 = require("../sessions/sessions.service");
const users_service_1 = require("../users/users.service");
const auth_guard_1 = require("./auth.guard");
const auth_service_1 = require("./auth.service");
const signup_dto_1 = require("./dto/signup.dto");
let AuthController = class AuthController {
    authService;
    usersService;
    sessionsService;
    constructor(authService, usersService, sessionsService) {
        this.authService = authService;
        this.usersService = usersService;
        this.sessionsService = sessionsService;
    }
    async signIn(body, clientIP, request, response) {
        const userAgent = request.headers['user-agent'] || '';
        const session = await this.authService.signIn(body, clientIP, userAgent);
        response.cookie('sessionId', session.sessionId, { httpOnly: true, expires: session.expiredAt, secure: false });
    }
    async logout(request, response) {
        const sessionId = await request.cookies['sessionId'];
        await this.authService.logout(sessionId);
        response.clearCookie('sessionId');
    }
    async me(request) {
        const sessionId = await request.cookies['sessionId'];
        return await this.sessionsService.findUserIdBySessionId(sessionId);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('signin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto, String, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('me'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, users_service_1.UsersService, sessions_service_1.SessionsService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map