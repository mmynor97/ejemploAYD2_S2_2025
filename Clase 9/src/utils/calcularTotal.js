
function calcularTotal(monto) {
  if (monto > 50) {
    // Aplica un 10% de descuento.
    return monto * 0.9;
  } else {
    // Si el monto es de $50 o menos, no hay descuento.
    return monto;
  }
}

module.exports = calcularTotal;