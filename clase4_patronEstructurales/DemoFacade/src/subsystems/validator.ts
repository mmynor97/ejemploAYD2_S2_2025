export class Validator {
  isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  minLength(value: string, n: number): boolean {
    return value.length >= n;
  }
}