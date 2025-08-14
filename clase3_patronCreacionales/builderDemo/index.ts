import { ClassicPizzaBuilder } from "./builders/ClassicPizzaBuilder";
import { MexicanPizzaBuilder } from "./builders/MexicanPizzaBuilder";
import { PizzaDirector }       from "./director/PizzaDirector";

function ordenarPizza(tipo: string, extras: string[]) {
  const builder =
    tipo === "mexicana" ? new MexicanPizzaBuilder() : new ClassicPizzaBuilder();

  const director = new PizzaDirector(builder);
  return director.makePersonalizada(extras);
}

const pedido1 = ordenarPizza("clasica",  ["pepperoni", "aceitunas"]);
const pedido2 = ordenarPizza("mexicana", ["jalapeños"]);

console.log(pedido1.descripcion());
console.log(pedido2.descripcion());