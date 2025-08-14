import { IPago } from "./IPago";
import { OldGateway } from "./OldGateway";

/**
 * ADAPTADOR: traduce la interfaz IPago hacia OldGateway.
 */
export class OldGatewayAdapter implements IPago {
  constructor(private legacy: OldGateway) {}

  cobrar(monto: number): boolean {
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
