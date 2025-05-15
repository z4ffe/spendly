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
exports.Session = void 0;
const typeorm_1 = require("typeorm");
const users_entitiy_1 = require("../../users/entities/users.entitiy");
let Session = class Session {
    sessionId;
    userId;
    ipAddress;
    userAgent;
    expiredAt;
    createdAt;
};
exports.Session = Session;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'session_id' }),
    __metadata("design:type", String)
], Session.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entitiy_1.User, (user) => user.id, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entitiy_1.User)
], Session.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_address', length: 50, nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userAgent', length: 255, nullable: true }),
    __metadata("design:type", String)
], Session.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expired_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Session.prototype, "expiredAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], Session.prototype, "createdAt", void 0);
exports.Session = Session = __decorate([
    (0, typeorm_1.Entity)()
], Session);
//# sourceMappingURL=session.entity.js.map