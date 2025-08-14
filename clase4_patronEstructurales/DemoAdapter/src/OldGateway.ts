
/**
 * Pasarela legada que NO podemos modificar.
 * Recibe string y devuelve "OK" | "FAIL".
 */
export class OldGateway {
  processPayment(value: string): "OK" | "FAIL" {
    // Simulación: considera OK si el string representa un número > 0
    const n = Number(value);
    if (!isFinite(n) || n <= 0) return "FAIL";
    // Podrías simular fallas por reglas de negocio, aquí lo dejamos simple.
    return "OK";
  }
}
