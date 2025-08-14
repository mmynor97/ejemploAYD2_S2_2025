"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
class PizzaDirector {
    builder;
    constructor(builder) {
        this.builder = builder;
    }
    setBuilder(builder) { this.builder = builder; }
    makePersonalizada(extras = []) {
        this.builder.setMasa().setSalsa().setQueso();
        extras.forEach(e => this.builder.addExtra(e));
        return this.builder.getResult();
    }
}
exports.PizzaDirector = PizzaDirector;
//# sourceMappingURL=PizzaDirector.js.map