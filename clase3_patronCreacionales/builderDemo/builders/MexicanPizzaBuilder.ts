import { Pizza } from "../products/pizza";
import { IPizzaBuilder } from "./IPizzaBuilder";

export class MexicanPizzaBuilder implements IPizzaBuilder {
  private pizza = new Pizza();

  setMasa()  { this.pizza.masa  = "crujiente";   return this; }
  setSalsa() { this.pizza.salsa = "chipotle";    return this; }
  setQueso() { this.pizza.queso = "queso Oaxaca";return this; }

  addExtra(extra: string) { this.pizza.extras.push(extra); return this; }

  getResult(): Pizza {
    const resultado = this.pizza;
    this.pizza = new Pizza();
    return resultado;
  }
}