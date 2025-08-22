import { DiscountStrategy, round2 } from "./DiscountStrategy";

export class FixedAmountDiscount implements DiscountStrategy {
  constructor(private readonly amountOff: number) {
    if (amountOff < 0) throw new Error("El monto de descuento no puede ser negativo.");
  }
  getFinalPrice(basePrice: number): number {
    if (basePrice < 0) throw new Error("El precio base no puede ser negativo.");
    return round2(Math.max(0, basePrice - this.amountOff));
  }
}
