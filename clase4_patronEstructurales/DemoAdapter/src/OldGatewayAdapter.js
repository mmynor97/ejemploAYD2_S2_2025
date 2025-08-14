"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldGatewayAdapter = void 0;
/**
 * ADAPTADOR: traduce la interfaz IPago hacia OldGateway.
 */
class OldGatewayAdapter {
    legacy;
    constructor(legacy) {
        this.legacy = legacy;
    }
    cobrar(monto) {
        // Normalización / validación extra pedida en requisitos:
        if (typeof monto !== "number" || !isFinite(monto) || monto <= 0) {
            return false; // rechaza montos <= 0
        }
        // 1) Convierte number -> string con dos decimales
        const value = monto.toFixed(2);
        // 2) Llama a la API legada
        const resp = this.legacy.processPayment(value);
        // 3) Traduce "OK"/"FAIL" -> boolean
        return resp === "OK";
    }
}
exports.OldGatewayAdapter = OldGatewayAdapter;
//# sourceMappingURL=OldGatewayAdapter.js.map