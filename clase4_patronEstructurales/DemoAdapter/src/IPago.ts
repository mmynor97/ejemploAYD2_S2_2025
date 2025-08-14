export interface IPago {
  /**
   * Cobra un monto y devuelve true si el cobro fue exitoso.
   */
  cobrar(monto: number): boolean;
}