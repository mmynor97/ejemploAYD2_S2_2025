"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    isEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    minLength(value, n) {
        return value.length >= n;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map