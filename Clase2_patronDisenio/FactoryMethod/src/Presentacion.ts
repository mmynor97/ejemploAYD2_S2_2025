import { Documento } from "./documento";

export class Presentacion implements Documento {
  abrir(): void {
    console.log("Abriendo una presentación...");
  }
}
