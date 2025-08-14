import { IPago } from "./IPago";
import { OldGateway } from "./OldGateway";
/**
 * ADAPTADOR: traduce la interfaz IPago hacia OldGateway.
 */
export declare class OldGatewayAdapter implements IPago {
    private legacy;
    constructor(legacy: OldGateway);
    cobrar(monto: number): boolean;
}
//# sourceMappingURL=OldGatewayAdapter.d.ts.map