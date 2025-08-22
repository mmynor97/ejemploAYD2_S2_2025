import { Observer } from "../core/observer";
import { Promotion } from "../domain/promotion";

export class AnalyticsService implements Observer<Promotion> {
  private countersByTag: Record<string, number> = {};
  private totalReceived = 0;

  update(promo: Promotion): void {
    this.totalReceived++;
    (promo.tags ?? []).forEach(tag => {
      this.countersByTag[tag] = (this.countersByTag[tag] ?? 0) + 1;
    });
    console.log(`[Analytics] Recibidas: ${this.totalReceived}. Por tags: ${JSON.stringify(this.countersByTag)}`);
  }
}
