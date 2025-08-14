import { Validator } from '../subsystems/validator';
import { PasswordHasher } from '../subsystems/PasswordHasher';
import { UserRepository } from '../subsystems/UserRepository';
import { SessionManager } from '../subsystems/SessionManager';

export class AuthFacade {
  constructor(
    private readonly validator = new Validator(),
    private readonly hasher = new PasswordHasher(),
    private readonly repo = new UserRepository(),
    private readonly sessions = new SessionManager()
  ) {}

  async register(email: string, password: string): Promise<{ id: number }> {
    if (!this.validator.isEmail(email)) throw new Error('Email inválido');
    if (!this.validator.minLength(password, 6)) {
      throw new Error('Password demasiado corto (mínimo 6)');
    }
    const passwordHash = this.hasher.hash(password);
    const user = await this.repo.create(email, passwordHash);
    return { id: user.id };
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error('Credenciales inválidas');

    const ok = this.hasher.compare(password, user.passwordHash);
    if (!ok) throw new Error('Credenciales inválidas');

    const token = await this.sessions.create(user.id);
    return { token };
  }

  async getProfile(token: string): Promise<{ id: number; email: string }> {
    const userId = await this.sessions.getUserId(token);
    if (!userId) throw new Error('Sesión inválida');

    const user = await this.repo.findById(userId);
    if (!user) throw new Error('Usuario no encontrado');

    return { id: user.id, email: user.email };
  }

  async logout(token: string): Promise<void> {
    await this.sessions.revoke(token);
  }
}