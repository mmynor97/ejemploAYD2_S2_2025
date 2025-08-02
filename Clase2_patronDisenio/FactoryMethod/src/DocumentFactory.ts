import { Documento } from "./documento";
import { Informe } from "./Informe";
import { Presentacion } from "./Presentacion";
import { Dibujo } from "./Dibujo";

export class DocumentFactory {
  static crearDocumento(tipo: string): Documento | null {
    switch (tipo.toLowerCase()) {
      case "informe":
        return new Informe();
      case "presentacion":
        return new Presentacion();
      case "dibujo":
        return new Dibujo();
      default:
        console.log("Tipo de documento no reconocido.");
        return null;
    }
  }
}

