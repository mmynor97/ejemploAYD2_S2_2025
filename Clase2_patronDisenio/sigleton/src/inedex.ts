import { EventCounter } from './contador';

const contador1 = EventCounter.getInstance();
contador1.incrementar();
contador1.incrementar();

const contador2 = EventCounter.getInstance();
contador2.incrementar();

console.log("Total acumulado:", contador2.obtenerTotal()); // 3
console.log("¿Son la misma instancia?", contador1 === contador2); // true