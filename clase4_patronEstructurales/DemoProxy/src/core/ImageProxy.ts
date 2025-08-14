import { IImage } from "./IImage";
import { RealImage } from "./RealImage";

/**
 * Proxy con caché estática a nivel de clase:
 * - Si una URL ya fue cargada antes, la reutiliza.
 * - Muestra placeholder inmediato antes de cargar (lazy).
 */
export class ImageProxy implements IImage {
  private static cache = new Map<string, RealImage>(); // URL -> RealImage

  constructor(private url: string) {}

  getUrl(): string {
    return this.url;
  }

  /**
   * Muestra placeholder de inmediato, y luego:
   *  - Si está en cache, usa la imagen ya lista (sin descargar).
   *  - Si no, crea RealImage, descarga y guarda en caché.
   */
  async show(): Promise<void> {
    // Placeholder inmediato
    console.log(`[${this.url}] Placeholder: "Cargando imagen..."`);

    // ¿Ya está en caché?
    const cached = ImageProxy.cache.get(this.url);
    if (cached) {
      console.log(`[${this.url}] Usando caché (sin descargar).`);
      await cached.show();
      return;
    }

    // No está en caché: creamos la RealImage y descargamos
    const real = new RealImage(this.url);
    await real.show(); // internamente descarga y luego muestra

    // Guardamos en caché para futuros usos
    ImageProxy.cache.set(this.url, real);
    console.log(`[${this.url}] Guardada en caché.`);
  }

  /** Utilidad opcional para limpiar toda la caché (demo/test). */
  static clearCache(): void {
    ImageProxy.cache.clear();
  }
}
