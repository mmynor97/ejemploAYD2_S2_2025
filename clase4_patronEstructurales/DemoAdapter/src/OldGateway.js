"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldGateway = void 0;
/**
 * Pasarela legada que NO podemos modificar.
 * Recibe string y devuelve "OK" | "FAIL".
 */
class OldGateway {
    processPayment(value) {
        // Simulación: considera OK si el string representa un número > 0
        const n = Number(value);
        if (!isFinite(n) || n <= 0)
            return "FAIL";
        // Podrías simular fallas por reglas de negocio, aquí lo dejamos simple.
        return "OK";
    }
}
exports.OldGateway = OldGateway;
//# sourceMappingURL=OldGateway.js.map