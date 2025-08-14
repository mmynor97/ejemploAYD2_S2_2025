import { IPago } from "./IPago";
/**
 * Cliente del sistema que SOLO conoce IPago.
 * No sabe nada de OldGateway ni de conversiones.
 */
export declare class PaymentService {
    private proveedor;
    constructor(proveedor: IPago);
    cobrarCompra(monto: number): string;
}
//# sourceMappingURL=PaymentService.d.ts.map