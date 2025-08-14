"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MexicanPizzaBuilder = void 0;
const pizza_1 = require("../products/pizza");
class MexicanPizzaBuilder {
    pizza = new pizza_1.Pizza();
    setMasa() { this.pizza.masa = "crujiente"; return this; }
    setSalsa() { this.pizza.salsa = "chipotle"; return this; }
    setQueso() { this.pizza.queso = "queso Oaxaca"; return this; }
    addExtra(extra) { this.pizza.extras.push(extra); return this; }
    getResult() {
        const resultado = this.pizza;
        this.pizza = new pizza_1.Pizza();
        return resultado;
    }
}
exports.MexicanPizzaBuilder = MexicanPizzaBuilder;
//# sourceMappingURL=MexicanPizzaBuilder.js.map