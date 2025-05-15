"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiredSessionDate = void 0;
const expiredSessionDate = (days) => {
    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + days);
    return expiredDate;
};
exports.expiredSessionDate = expiredSessionDate;
//# sourceMappingURL=expiredSessionDate.js.map