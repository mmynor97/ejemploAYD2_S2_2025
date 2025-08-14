"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
/**
 * Cliente del sistema que SOLO conoce IPago.
 * No sabe nada de OldGateway ni de conversiones.
 */
class PaymentService {
    proveedor;
    constructor(proveedor) {
        this.proveedor = proveedor;
    }
    cobrarCompra(monto) {
        const ok = this.proveedor.cobrar(monto);
        return ok ? "Cobro realizado" : "Cobro rechazado";
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map