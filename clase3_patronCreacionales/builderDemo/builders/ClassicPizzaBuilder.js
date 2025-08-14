"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicPizzaBuilder = void 0;
const pizza_1 = require("../products/pizza");
class ClassicPizzaBuilder {
    pizza = new pizza_1.Pizza();
    setMasa() { this.pizza.masa = "tradicional"; return this; }
    setSalsa() { this.pizza.salsa = "pomodoro"; return this; }
    setQueso() { this.pizza.queso = "mozzarella"; return this; }
    addExtra(extra) { this.pizza.extras.push(extra); return this; }
    getResult() {
        const resultado = this.pizza;
        this.pizza = new pizza_1.Pizza(); // reset
        return resultado;
    }
}
exports.ClassicPizzaBuilder = ClassicPizzaBuilder;
//# sourceMappingURL=ClassicPizzaBuilder.js.map