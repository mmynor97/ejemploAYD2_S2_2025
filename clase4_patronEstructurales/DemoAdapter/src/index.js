"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OldGateway_1 = require("./OldGateway");
const OldGatewayAdapter_1 = require("./OldGatewayAdapter");
const PaymentService_1 = require("./PaymentService");
// Inyección del adaptador donde se espera IPago
const legacy = new OldGateway_1.OldGateway();
const adapter = new OldGatewayAdapter_1.OldGatewayAdapter(legacy);
const servicio = new PaymentService_1.PaymentService(adapter);
// Pruebas
console.log("Caso 1 (199.99):", servicio.cobrarCompra(199.99));
// Esperado: llama internamente a processPayment("199.99") -> OK -> true
console.log("Caso 2 (0):", servicio.cobrarCompra(0));
// Esperado: rechazado por validación del adaptador
console.log("Caso 3 (-5):", servicio.cobrarCompra(-5));
// Esperado: rechazado por validación del adaptador
console.log("Caso 4 (49):", servicio.cobrarCompra(49));
// Esperado: OK
//# sourceMappingURL=index.js.map