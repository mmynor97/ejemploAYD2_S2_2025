import { Promotion } from "./domain/promotion";
import { PromotionPublisher } from "./core/promotionPublisher";
import { InStoreDisplay } from "./observers/InStoreDisplay";
import { EmailService } from "./observers/EmailService";
import { AnalyticsService } from "./observers/AnalyticsService";

// 1) Instanciamos el publicador
const promoPublisher = new PromotionPublisher();

// 2) Creamos los módulos (observadores)
const displayA = new InStoreDisplay("Screen-A");
const emailSvc = new EmailService("promos@tienda.com");
const analytics = new AnalyticsService();

// 3) Suscripciones
const unsubDisplayA = promoPublisher.subscribe(displayA);
const unsubEmail    = promoPublisher.subscribe(emailSvc);
promoPublisher.subscribe(analytics); // no guardamos la función, seguirá siempre

// 4) Creamos algunas promociones
const promoInStore: Promotion = {
  id: "p-001",
  title: "2x1 en bebidas",
  description: "Solo en tienda física",
  startsAt: new Date(),
  endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
  channels: ["in-store"],
  tags: ["bebidas", "fisico"]
};

const promoEmailYWeb: Promotion = {
  id: "p-002",
  title: "Envío gratis 48h",
  description: "Válido en compras online",
  startsAt: new Date(),
  endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
  channels: ["email", "web"],
  tags: ["envio", "online"]
};

// 5) Anunciamos la primera (llega a pantalla en tienda y analítica)
promoPublisher.announce(promoInStore)
  .then(async () => {
    // 6) Damos de baja al servicio de correo antes de la segunda
    console.log("[Main] Dando de baja EmailService (no recibirá la siguiente)");
    unsubEmail();

    // 7) Anunciamos la segunda (llega a analítica; email NO, pantalla sí solo si canal incluye in-store)
    await promoPublisher.announce(promoEmailYWeb);

    // 8) También podemos dar de baja la pantalla en tienda
    console.log("[Main] Dando de baja InStoreDisplay");
    unsubDisplayA();

    // 9) Una tercera promo (solo para ver que ya no llegan algunos)
    await promoPublisher.announce({
      id: "p-003",
      title: "Descuento sorpresa",
      description: "Solo hoy",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
      channels: ["mobile", "web"],
      tags: ["flash"]
    });

    console.log("[Main] Fin de la demo");
  })
  .catch(err => console.error(err));
