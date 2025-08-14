"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
class SessionManager {
    sessions = new Map();
    generateToken() {
        return Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    async create(userId) {
        const token = this.generateToken();
        this.sessions.set(token, userId);
        return token;
    }
    async getUserId(token) {
        return this.sessions.get(token);
    }
    async revoke(token) {
        this.sessions.delete(token);
    }
}
exports.SessionManager = SessionManager;
//# sourceMappingURL=SessionManager.js.map