"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHasher = void 0;
class PasswordHasher {
    hash(plain) {
        return plain.split('').reverse().join('') + '#h';
    }
    compare(plain, hashed) {
        return this.hash(plain) === hashed;
    }
}
exports.PasswordHasher = PasswordHasher;
//# sourceMappingURL=PasswordHasher.js.map