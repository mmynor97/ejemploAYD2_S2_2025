export interface Prototype<T> {
  clone(): T;
}

export interface Tarjeta {
  nombre: string;
  puesto: string;
  colorFondo: string;
  colorTexto: string;
  tipografia: string;
  logo: string;      
}

// Plantilla concreta que implementa clone()
export class PlantillaTarjeta implements Prototype<PlantillaTarjeta> {
  constructor(private data: Tarjeta) {}

  // *** Prototype: devuelve una COPIA profunda independiente ***
  clone(): PlantillaTarjeta {
    return new PlantillaTarjeta(JSON.parse(JSON.stringify(this.data)));
  }

  setNombre(nombre: string)          { this.data.nombre = nombre; return this; }
  setPuesto(puesto: string)          { this.data.puesto = puesto; return this; }
  setLogo(logo: string)              { this.data.logo = logo;     return this; }

  toJSON(): Tarjeta { return this.data; }
}