// 1) Componente (contrato común)
export interface Beverage {
  cost(): number;
  description(): string;
}

// 2) Componentes concretos (bebidas base)
export class Coffee implements Beverage {
  cost(): number {
    return 2.5; // precio base
  }
  description(): string {
    return "Coffee";
  }
}

// (Opcional) Otro componente base para demostrar reutilización
export class Tea implements Beverage {
  cost(): number {
    return 2.0;
  }
  description(): string {
    return "Tea";
  }
}

// 3) Decorador base (guarda un Beverage y delega)
export abstract class AddOnDecorator implements Beverage {
  constructor(protected readonly beverage: Beverage) {}
  abstract cost(): number;
  abstract description(): string;
}

// 4) Decoradores concretos (añaden comportamiento)
export class Milk extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 0.4;
  }
  description(): string {
    return `${this.beverage.description()} + Milk`;
  }
}

export class Sugar extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 0.2;
  }
  description(): string {
    return `${this.beverage.description()} + Sugar`;
  }
}

export class Soy extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 0.5;
  }
  description(): string {
    return `${this.beverage.description()} + Soy`;
  }
}

// (Opcional) Otro extra
export class Cinnamon extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 0.3;
  }
  description(): string {
    return `${this.beverage.description()} + Cinnamon`;
  }
}