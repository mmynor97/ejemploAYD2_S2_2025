import { Documento } from "./documento";

export class Informe implements Documento {
  abrir(): void {
    console.log("Abriendo un informe...");
  }
}
