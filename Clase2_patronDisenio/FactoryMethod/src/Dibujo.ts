import { Documento } from "./documento";

export class Dibujo implements Documento {
  abrir(): void {
    console.log("Abriendo un dibujo...");
  }
}
