import { IPago } from "./IPago";

/**
 * Cliente del sistema que SOLO conoce IPago.
 * No sabe nada de OldGateway ni de conversiones.
 */
export class PaymentService {
  constructor(private proveedor: IPago) {}

  cobrarCompra(monto: number): string {
    const ok = this.proveedor.cobrar(monto);
    return ok ? "Cobro realizado" : "Cobro rechazado";
  }
}
