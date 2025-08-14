type User = { id: number; email: string; passwordHash: string };

export class UserRepository {
  private users = new Map<number, User>();
  private byEmail = new Map<string, User>();
  private seq = 1;

  async create(email: string, passwordHash: string): Promise<User> {
    if (this.byEmail.has(email)) {
      throw new Error('Email ya registrado');
    }
    const user: User = { id: this.seq++, email, passwordHash };
    this.users.set(user.id, user);
    this.byEmail.set(email, user);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.byEmail.get(email);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }
}