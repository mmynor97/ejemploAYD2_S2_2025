import { DiscountStrategy } from "./DiscountStrategy";

export class CompositeDiscount implements DiscountStrategy {
  constructor(private readonly strategies: DiscountStrategy[]) {}
  getFinalPrice(basePrice: number): number {
    return this.strategies.reduce((acc, s) => s.getFinalPrice(acc), basePrice);
  }
}