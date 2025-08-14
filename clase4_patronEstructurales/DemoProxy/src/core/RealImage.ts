import { IImage } from "./IImage";
import { delay } from "../utils/delay";

/**
 * Simula una imagen real que tarda en descargarse del servidor.
 * 
 */
export class RealImage implements IImage {
  private data: Buffer | null = null; // simulación del "contenido" de la imagen

  constructor(private url: string) {}

  getUrl(): string {
    return this.url;
  }

  private async loadIfNeeded(): Promise<void> {
    if (this.data) return; // ya cargada (cache interna del propio objeto)

    console.log(`Descargando imagen real desde el servidor: ${this.url} ...`);
    // Simula latencia alta (p. ej. 2.5s)
    await delay(2500);

    // Aquí “data” representaría los bytes de la imagen descargada
    this.data = Buffer.from(`<<BINARIO:${this.url}>>`, "utf-8");
    console.log(`Descarga completada: ${this.url}`);
  }

  /** Muestra la imagen (si no está cargada, primero la descarga). */
  async show(): Promise<void> {
    await this.loadIfNeeded();
    // En un front real, aquí harías: img.src = this.url
    console.log(`Mostrando imagen REAL: ${this.url} (bytes: ${this.data?.length})`);
  }
}
