import { Publisher } from "./publisher";
import { Promotion } from "../domain/promotion";

export class PromotionPublisher extends Publisher<Promotion> {
  // API específica del dominio
  async announce(promotion: Promotion): Promise<void> {
    console.log(`[PromotionPublisher] Anunciando promoción "${promotion.title}"`);
    await this.notify(promotion);
  }
}
