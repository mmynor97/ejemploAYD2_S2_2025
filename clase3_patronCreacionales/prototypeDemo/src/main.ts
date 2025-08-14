import { PlantillaTarjeta } from "./CardPrototype";

// ----- 1) Definimos los prototipos base -----
const estandar = new PlantillaTarjeta({
  nombre:    "NOMBRE",           // placeholder
  puesto:    "PUESTO",
  colorFondo:"#ffffff",
  colorTexto:"#000000",
  tipografia:"Arial",
  logo:      "logos/estandar.png"
});

const elegante = new PlantillaTarjeta({
  nombre:    "NOMBRE",
  puesto:    "PUESTO",
  colorFondo:"#1f1f1f",
  colorTexto:"#eaeaea",
  tipografia:"Georgia",
  logo:      "logos/elegante.png"
});

const minimalista = new PlantillaTarjeta({
  nombre:    "NOMBRE",
  puesto:    "PUESTO",
  colorFondo:"#f8f8f8",
  colorTexto:"#111111",
  tipografia:"Helvetica Neue",
  logo:      "logos/minimalista.png"
});

const catalogo = { estandar, elegante, minimalista };

// ----- 2) Simulamos un pedido de cliente -----
function generarTarjeta(tipo: keyof typeof catalogo, datosCliente: {nombre:string, puesto:string, logo?:string}) {
  // a) Clonamos la plantilla -> objeto independiente
  const tarjeta = catalogo[tipo].clone();

  // b) Personalizamos campos
  tarjeta
    .setNombre(datosCliente.nombre)
    .setPuesto(datosCliente.puesto);

  if (datosCliente.logo) tarjeta.setLogo(datosCliente.logo);

  return tarjeta;
}

// ----- 3) Pedido de ejemplo -----
const pedidoJuan = generarTarjeta("elegante", {
  nombre:"Juan Pérez",
  puesto:"Director de Ventas",
  logo:  "clientes/juan/logo.png"
});

console.log("Tarjeta generada:", pedidoJuan.toJSON());