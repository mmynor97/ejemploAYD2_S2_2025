"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    masa;
    salsa;
    queso;
    extras = [];
    descripcion() {
        return `Pizza con masa ${this.masa}, salsa ${this.salsa}, ` +
            `queso ${this.queso} y extras ${this.extras.join(", ") || "ninguno"}.`;
    }
}
exports.Pizza = Pizza;
//# sourceMappingURL=pizza.js.map