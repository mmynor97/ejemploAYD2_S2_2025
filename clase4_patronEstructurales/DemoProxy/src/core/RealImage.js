"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealImage = void 0;
const delay_1 = require("../utils/delay");
/**
 * Simula una imagen real que tarda en descargarse del servidor.
 *
 */
class RealImage {
    url;
    data = null; // simulación del "contenido" de la imagen
    constructor(url) {
        this.url = url;
    }
    getUrl() {
        return this.url;
    }
    async loadIfNeeded() {
        if (this.data)
            return; // ya cargada (cache interna del propio objeto)
        console.log(`Descargando imagen real desde el servidor: ${this.url} ...`);
        // Simula latencia alta (p. ej. 2.5s)
        await (0, delay_1.delay)(2500);
        // Aquí “data” representaría los bytes de la imagen descargada
        this.data = Buffer.from(`<<BINARIO:${this.url}>>`, "utf-8");
        console.log(`Descarga completada: ${this.url}`);
    }
    /** Muestra la imagen (si no está cargada, primero la descarga). */
    async show() {
        await this.loadIfNeeded();
        // En un front real, aquí harías: img.src = this.url
        console.log(`Mostrando imagen REAL: ${this.url} (bytes: ${this.data?.length})`);
    }
}
exports.RealImage = RealImage;
//# sourceMappingURL=RealImage.js.map