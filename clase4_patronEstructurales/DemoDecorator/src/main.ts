import {
  Beverage,
  Coffee,
  Tea,
  Milk,
  Sugar,
  Soy,
  Cinnamon,
} from "./coffee-decorator";

function printOrder(o: Beverage) {
  console.log(`${o.description()} -> $${o.cost().toFixed(2)}`);
}

function demo() {
  // Órdenes de ejemplo con Coffee
  const order1 = new Coffee();                            // Coffee
  const order2 = new Milk(new Coffee());                  // Coffee + Milk
  const order3 = new Sugar(new Milk(new Coffee()));       // Coffee + Milk + Sugar
  const order4 = new Soy(new Sugar(new Milk(new Coffee()))); // Coffee + Milk + Sugar + Soy

  // También funciona con otras bebidas base (Tea) y más extras
  const order5 = new Cinnamon(new Milk(new Tea()));       // Tea + Milk + Cinnamon
  const order6 = new Soy(new Cinnamon(new Sugar(new Tea()))); // Tea + Sugar + Cinnamon + Soy

  const orders: Beverage[] = [order1, order2, order3, order4, order5, order6];
  orders.forEach(printOrder);
}

demo();