import { PriceCalculator } from "./PriceCalculator";
import { NoDiscount } from "./discounts/NoDiscount";
import { PercentageDiscount } from "./discounts/PercentageDiscount";
import { FixedAmountDiscount } from "./discounts/FixedAmountDiscount";
import { CompositeDiscount } from "./discounts/CompositeDiscount";

type Cliente = { tipo: "VIP" | "Regular"; cupon?: number };

function elegirEstrategia(campaniaActiva: boolean, cliente: Cliente) {
  if (typeof cliente.cupon === "number" && cliente.cupon > 0) {
    return new FixedAmountDiscount(cliente.cupon);
  }
  if (cliente.tipo === "VIP") {
    return new PercentageDiscount(10);
  }
  if (campaniaActiva) {
    return new PercentageDiscount(5);
  }
  return new NoDiscount();
}

const base = 1200;
const calc = new PriceCalculator();

// 1) Sin descuento
calc.setStrategy(new NoDiscount());
console.log("Base:", base);
console.log("Sin descuento:", calc.calculate(base));

// 2) Campaña 15%
calc.setStrategy(new PercentageDiscount(15));
console.log("Campaña 15%:", calc.calculate(base));

// 3) Cupón Q200
calc.setStrategy(new FixedAmountDiscount(200));
console.log("Cupón Q200:", calc.calculate(base));

// 4) Selección dinámica (campaña + VIP, sin cupón)
const estrategia = elegirEstrategia(true, { tipo: "VIP", cupon: 0 });
calc.setStrategy(estrategia);
console.log("Selección dinámica (campaña + VIP, sin cupón):", calc.calculate(base));

// 5) Compuesto (VIP 10% + Cupón Q50)
const compuesta = new CompositeDiscount([
  new PercentageDiscount(10),
  new FixedAmountDiscount(50),
]);
calc.setStrategy(compuesta);
console.log("VIP 10% + Cupón Q50 (compuesto):", calc.calculate(base));
