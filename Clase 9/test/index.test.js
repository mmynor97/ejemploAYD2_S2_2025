// tests/index.test.js
const { obtenerMensajeDeCompra } = require('../src/index');

describe('obtenerMensajeDeCompra', () => {

  test('debe devolver un mensaje con el total con descuento para montos mayores a $50', () => {
    // Prepara un monto mayor a 50
    const monto = 100;
    const totalEsperado = 90;
    
    // Actúa llamando a la función principal
    const mensajeObtenido = obtenerMensajeDeCompra(monto);

    // Verifica que el mensaje contenga el total correcto
    expect(mensajeObtenido).toContain(`$${totalEsperado}`);
  });

  test('debe devolver un mensaje con el total sin descuento para montos de $50 o menos', () => {
    // Prepara un monto de 50
    const monto = 50;
    const totalEsperado = 50;
    
    // Actúa llamando a la función principal
    const mensajeObtenido = obtenerMensajeDeCompra(monto);

    // Verifica que el mensaje contenga el total correcto
    expect(mensajeObtenido).toContain(`$${totalEsperado}`);
  });
});