"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFacade = void 0;
const validator_1 = require("../subsystems/validator");
const PasswordHasher_1 = require("../subsystems/PasswordHasher");
const UserRepository_1 = require("../subsystems/UserRepository");
const SessionManager_1 = require("../subsystems/SessionManager");
class AuthFacade {
    validator;
    hasher;
    repo;
    sessions;
    constructor(validator = new validator_1.Validator(), hasher = new PasswordHasher_1.PasswordHasher(), repo = new UserRepository_1.UserRepository(), sessions = new SessionManager_1.SessionManager()) {
        this.validator = validator;
        this.hasher = hasher;
        this.repo = repo;
        this.sessions = sessions;
    }
    async register(email, password) {
        if (!this.validator.isEmail(email))
            throw new Error('Email inválido');
        if (!this.validator.minLength(password, 6)) {
            throw new Error('Password demasiado corto (mínimo 6)');
        }
        const passwordHash = this.hasher.hash(password);
        const user = await this.repo.create(email, passwordHash);
        return { id: user.id };
    }
    async login(email, password) {
        const user = await this.repo.findByEmail(email);
        if (!user)
            throw new Error('Credenciales inválidas');
        const ok = this.hasher.compare(password, user.passwordHash);
        if (!ok)
            throw new Error('Credenciales inválidas');
        const token = await this.sessions.create(user.id);
        return { token };
    }
    async getProfile(token) {
        const userId = await this.sessions.getUserId(token);
        if (!userId)
            throw new Error('Sesión inválida');
        const user = await this.repo.findById(userId);
        if (!user)
            throw new Error('Usuario no encontrado');
        return { id: user.id, email: user.email };
    }
    async logout(token) {
        await this.sessions.revoke(token);
    }
}
exports.AuthFacade = AuthFacade;
//# sourceMappingURL=AuthFacade.js.map