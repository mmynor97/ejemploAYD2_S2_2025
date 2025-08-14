import { Pizza } from "../products/pizza";

export interface IPizzaBuilder {
  setMasa(): this;
  setSalsa(): this;
  setQueso(): this;
  addExtra(extra: string): this;
  getResult(): Pizza;
}