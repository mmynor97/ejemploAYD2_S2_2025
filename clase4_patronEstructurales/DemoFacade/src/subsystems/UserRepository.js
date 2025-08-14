"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    users = new Map();
    byEmail = new Map();
    seq = 1;
    async create(email, passwordHash) {
        if (this.byEmail.has(email)) {
            throw new Error('Email ya registrado');
        }
        const user = { id: this.seq++, email, passwordHash };
        this.users.set(user.id, user);
        this.byEmail.set(email, user);
        return user;
    }
    async findByEmail(email) {
        return this.byEmail.get(email);
    }
    async findById(id) {
        return this.users.get(id);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map