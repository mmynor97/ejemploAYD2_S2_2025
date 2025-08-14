"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassicPizzaBuilder_1 = require("./builders/ClassicPizzaBuilder");
const MexicanPizzaBuilder_1 = require("./builders/MexicanPizzaBuilder");
const PizzaDirector_1 = require("./director/PizzaDirector");
function ordenarPizza(tipo, extras) {
    const builder = tipo === "mexicana" ? new MexicanPizzaBuilder_1.MexicanPizzaBuilder() : new ClassicPizzaBuilder_1.ClassicPizzaBuilder();
    const director = new PizzaDirector_1.PizzaDirector(builder);
    return director.makePersonalizada(extras);
}
const pedido1 = ordenarPizza("clasica", ["pepperoni", "aceitunas"]);
const pedido2 = ordenarPizza("mexicana", ["jalapeños"]);
console.log(pedido1.descripcion());
console.log(pedido2.descripcion());
//# sourceMappingURL=index.js.map