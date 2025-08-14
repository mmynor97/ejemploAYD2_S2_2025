"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImageProxy_1 = require("./core/ImageProxy");
async function main() {
    const img1 = new ImageProxy_1.ImageProxy("https://cdn.misitio.com/gallery/ultra-1.jpg");
    const img2 = new ImageProxy_1.ImageProxy("https://cdn.misitio.com/gallery/ultra-2.jpg");
    const img1Again = new ImageProxy_1.ImageProxy("https://cdn.misitio.com/gallery/ultra-1.jpg");
    console.log("\n--- Primer intento de ver img1 (debe descargar) ---");
    await img1.show();
    console.log("\n--- Ver img2 por primera vez (debe descargar) ---");
    await img2.show();
    console.log("\n--- Ver img1 otra vez (debe salir de caché, sin descargar) ---");
    await img1Again.show();
}
main().catch(err => console.error(err));
//# sourceMappingURL=index.js.map