import { DiscountStrategy } from "./discounts/DiscountStrategy";
import { NoDiscount } from "./discounts/NoDiscount";

export class PriceCalculator {
  private strategy: DiscountStrategy;

  constructor(strategy: DiscountStrategy = new NoDiscount()) {
    this.strategy = strategy;
  }

  setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  calculate(basePrice: number): number {
    return this.strategy.getFinalPrice(basePrice);
  }
}