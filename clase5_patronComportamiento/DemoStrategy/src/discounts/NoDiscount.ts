import { DiscountStrategy, round2 } from "./DiscountStrategy";

export class NoDiscount implements DiscountStrategy {
  getFinalPrice(basePrice: number): number {
    if (basePrice < 0) throw new Error("El precio base no puede ser negativo.");
    return round2(basePrice);
  }
}