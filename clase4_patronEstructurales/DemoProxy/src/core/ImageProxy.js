"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProxy = void 0;
const RealImage_1 = require("./RealImage");
/**
 * Proxy con caché estática a nivel de clase:
 * - Si una URL ya fue cargada antes, la reutiliza.
 * - Muestra placeholder inmediato antes de cargar (lazy).
 */
class ImageProxy {
    url;
    static cache = new Map(); // URL -> RealImage
    constructor(url) {
        this.url = url;
    }
    getUrl() {
        return this.url;
    }
    /**
     * Muestra placeholder de inmediato, y luego:
     *  - Si está en cache, usa la imagen ya lista (sin descargar).
     *  - Si no, crea RealImage, descarga y guarda en caché.
     */
    async show() {
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
        const real = new RealImage_1.RealImage(this.url);
        await real.show(); // internamente descarga y luego muestra
        // Guardamos en caché para futuros usos
        ImageProxy.cache.set(this.url, real);
        console.log(`[${this.url}] Guardada en caché.`);
    }
    /** Utilidad opcional para limpiar toda la caché (demo/test). */
    static clearCache() {
        ImageProxy.cache.clear();
    }
}
exports.ImageProxy = ImageProxy;
//# sourceMappingURL=ImageProxy.js.map