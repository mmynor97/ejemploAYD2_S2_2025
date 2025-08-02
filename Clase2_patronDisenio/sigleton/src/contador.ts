export class EventCounter {
  private static instance: EventCounter;
  private contador: number = 0;

  private constructor() {}

  static getInstance(): EventCounter {
    if (!EventCounter.instance) {
      EventCounter.instance = new EventCounter();
    }
    return EventCounter.instance;
  }

  incrementar(): void {
    this.contador++;
    console.log(`Evento contado. Total actual: ${this.contador}`);
  }

  obtenerTotal(): number {
    return this.contador;
  }
}