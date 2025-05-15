"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionId = void 0;
const crypto_1 = require("crypto");
const createSessionId = () => {
    return (0, crypto_1.randomBytes)(64).toString('hex');
};
exports.createSessionId = createSessionId;
//# sourceMappingURL=createSessionId.js.map