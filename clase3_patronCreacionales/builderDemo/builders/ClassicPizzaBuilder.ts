import { Pizza } from "../products/pizza";
import { IPizzaBuilder } from "./IPizzaBuilder";

export class ClassicPizzaBuilder implements IPizzaBuilder {
  private pizza = new Pizza();

  setMasa()  { this.pizza.masa  = "tradicional"; return this; }
  setSalsa() { this.pizza.salsa = "pomodoro";    return this; }
  setQueso() { this.pizza.queso = "mozzarella";  return this; }

  addExtra(extra: string) { this.pizza.extras.push(extra); return this; }

  getResult(): Pizza {
    const resultado = this.pizza;
    this.pizza = new Pizza();                 // reset
    return resultado;
  }
}