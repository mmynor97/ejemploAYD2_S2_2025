import { IPizzaBuilder } from "../builders/IPizzaBuilder";

export class PizzaDirector {
  constructor(private builder: IPizzaBuilder) {}

  setBuilder(builder: IPizzaBuilder) { this.builder = builder; }

  makePersonalizada(extras: string[] = []) {
    this.builder.setMasa().setSalsa().setQueso();
    extras.forEach(e => this.builder.addExtra(e));
    return this.builder.getResult();
  }
}