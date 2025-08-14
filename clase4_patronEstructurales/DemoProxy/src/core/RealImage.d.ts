import { IImage } from "./IImage";
/**
 * Simula una imagen real que tarda en descargarse del servidor.
 *
 */
export declare class RealImage implements IImage {
    private url;
    private data;
    constructor(url: string);
    getUrl(): string;
    private loadIfNeeded;
    /** Muestra la imagen (si no está cargada, primero la descarga). */
    show(): Promise<void>;
}
//# sourceMappingURL=RealImage.d.ts.map