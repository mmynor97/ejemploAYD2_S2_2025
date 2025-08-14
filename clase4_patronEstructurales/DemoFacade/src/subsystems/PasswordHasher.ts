export class PasswordHasher {
  hash(plain: string): string {
    return plain.split('').reverse().join('') + '#h';
  }
  compare(plain: string, hashed: string): boolean {
    return this.hash(plain) === hashed;
  }
}