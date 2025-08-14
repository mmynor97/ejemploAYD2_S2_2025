export class SessionManager {
  private sessions = new Map<string, number>();

  generateToken(): string {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  async create(userId: number): Promise<string> {
    const token = this.generateToken();
    this.sessions.set(token, userId);
    return token;
  }

  async getUserId(token: string): Promise<number | undefined> {
    return this.sessions.get(token);
  }

  async revoke(token: string): Promise<void> {
    this.sessions.delete(token);
  }
}