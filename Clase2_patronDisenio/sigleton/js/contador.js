class EventCounter {
  constructor() {
    if (EventCounter._instance) {
      return EventCounter._instance;
    }

    this.contador = 0;
    EventCounter._instance = this;
  }

  static getInstance() {
    if (!EventCounter._instance) {
      EventCounter._instance = new EventCounter();
    }
    return EventCounter._instance;
  }

  incrementar() {
    this.contador++;
    console.log(`Evento contado. Total actual: ${this.contador}`);
  }

  obtenerTotal() {
    return this.contador;
  }
}


const contador1 = EventCounter.getInstance();
contador1.incrementar(); // 1
contador1.incrementar(); // 2

const contador2 = EventCounter.getInstance();
contador2.incrementar(); // 3

console.log("Total desde contador2:", contador2.obtenerTotal()); // 3
console.log("¿contador1 === contador2?", contador1 === contador2); // true