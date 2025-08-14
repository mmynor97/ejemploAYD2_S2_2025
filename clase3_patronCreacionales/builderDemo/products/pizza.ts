export class Pizza {
  masa!: string;
  salsa!: string;
  queso!: string;
  extras: string[] = [];

  descripcion(): string {
    return `Pizza con masa ${this.masa}, salsa ${this.salsa}, ` +
           `queso ${this.queso} y extras ${this.extras.join(", ") || "ninguno"}.`;
  }
}