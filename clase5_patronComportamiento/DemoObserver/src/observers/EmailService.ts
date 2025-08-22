import { Observer } from "../core/observer";
import { Promotion } from "../domain/promotion";

export class EmailService implements Observer<Promotion> {
  constructor(private from: string) {}

  async update(promo: Promotion): Promise<void> {
    if (promo.channels?.includes("email")) {
      // Simulación de envío asíncrono
      await new Promise((r) => setTimeout(r, 300));
      console.log(`[EmailService:${this.from}] Enviando email masivo: "${promo.title}"`);
    }
  }
}