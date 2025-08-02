import { DocumentFactory } from "./DocumentFactory";

const tipos = ["informe", "presentacion", "dibujo", "poema"];

for (const tipo of tipos) {
  const doc = DocumentFactory.crearDocumento(tipo);
  if (doc) {
    doc.abrir();
  }
}
