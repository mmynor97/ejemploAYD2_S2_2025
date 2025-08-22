import { DiscountStrategy, round2 } from "./DiscountStrategy";

export class PercentageDiscount implements DiscountStrategy {
  constructor(private readonly percent: number) {
    if (percent < 0 || percent > 100) {
      throw new Error("El porcentaje debe estar entre 0 y 100.");
    }
  }
  getFinalPrice(basePrice: number): number {
    if (basePrice < 0) throw new Error("El precio base no puede ser negativo.");
    const factor = 1 - this.percent / 100;
    return round2(basePrice * factor);
  }
}
