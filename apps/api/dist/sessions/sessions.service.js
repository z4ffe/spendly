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
exports.SessionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const createSessionId_1 = require("../utils/createSessionId");
const expiredSessionDate_1 = require("../utils/expiredSessionDate");
const session_entity_1 = require("./entities/session.entity");
let SessionsService = class SessionsService {
    sessionRepository;
    usersService;
    constructor(sessionRepository, usersService) {
        this.sessionRepository = sessionRepository;
        this.usersService = usersService;
    }
    async create(body, clientIp, userAgent) {
        const user = await this.usersService.findByEmail(body.email);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const session = this.sessionRepository.create({
            sessionId: (0, createSessionId_1.createSessionId)(),
            expiredAt: (0, expiredSessionDate_1.expiredSessionDate)(30),
            ipAddress: clientIp,
            userId: user,
            userAgent
        });
        return await this.sessionRepository.save(session);
    }
};
exports.SessionsService = SessionsService;
exports.SessionsService = SessionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(session_entity_1.Session)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], SessionsService);
//# sourceMappingURL=sessions.service.js.map