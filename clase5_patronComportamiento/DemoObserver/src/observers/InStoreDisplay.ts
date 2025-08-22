import { Observer } from "../core/observer";
import { Promotion } from "../domain/promotion";

export class InStoreDisplay implements Observer<Promotion> {
  constructor(private screenId: string) {}

  update(promo: Promotion): void {
    if (promo.channels?.includes("in-store")) {
      console.log(`[InStoreDisplay:${this.screenId}] Nueva promo: "${promo.title}" (vigencia: ${promo.startsAt.toDateString()} - ${promo.endsAt.toDateString()})`);

    } else {
      // Si la campaña no es para "in-store", ignoramos
    }
  }
}