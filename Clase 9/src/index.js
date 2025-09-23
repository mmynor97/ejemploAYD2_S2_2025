const calcularTotal = require('./utils/calcularTotal');

/**
 * Genera un mensaje de compra con el total final.
 * @param {number} monto - El monto de la compra.
 * @returns {string} El mensaje para el usuario.
 */
function obtenerMensajeDeCompra(monto) {
  const totalConDescuento = calcularTotal(monto);
  const mensaje = `El total de su compra es $${totalConDescuento}. ¡Gracias por su compra!`;
  return mensaje;
}

module.exports = {
  obtenerMensajeDeCompra
};