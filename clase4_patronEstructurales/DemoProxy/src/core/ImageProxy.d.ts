import { IImage } from "./IImage";
/**
 * Proxy con caché estática a nivel de clase:
 * - Si una URL ya fue cargada antes, la reutiliza.
 * - Muestra placeholder inmediato antes de cargar (lazy).
 */
export declare class ImageProxy implements IImage {
    private url;
    private static cache;
    constructor(url: string);
    getUrl(): string;
    /**
     * Muestra placeholder de inmediato, y luego:
     *  - Si está en cache, usa la imagen ya lista (sin descargar).
     *  - Si no, crea RealImage, descarga y guarda en caché.
     */
    show(): Promise<void>;
    /** Utilidad opcional para limpiar toda la caché (demo/test). */
    static clearCache(): void;
}
//# sourceMappingURL=ImageProxy.d.ts.map