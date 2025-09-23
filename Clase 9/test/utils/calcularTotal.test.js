
// Importamos la función que queremos probar desde el archivo src.
const calcularTotal = require('../../src/utils/calcularTotal');

// El 'describe' agrupa las pruebas para la función 'calcularTotal.
describe('calcularTotal', () => {

  // Esta prueba verifica el escenario del descuento.
  test('debe aplicar un 10% de descuento si el monto es mayor a $50', () => {
    // Preparar (Arrange)
    const monto = 100;
    const resultadoEsperado = 90;

    // Actuar (Act)
    const resultadoObtenido = calcularTotal(monto);

    // Verificar (Assert)
    expect(resultadoObtenido).toBe(resultadoEsperado);
  });

  // Esta prueba verifica el escenario sin descuento.
  test('no debe aplicar descuento si el monto es de $50 o menos', () => {
    // Preparar (Arrange)
    const monto = 50;
    const resultadoEsperado = 50;

    // Actuar (Act)
    const resultadoObtenido = calcularTotal(monto);

    // Verificar (Assert)
    expect(resultadoObtenido).toBe(resultadoEsperado);
  });

});