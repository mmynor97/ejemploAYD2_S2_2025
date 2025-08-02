"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contador_1 = require("./contador");
const contador1 = contador_1.EventCounter.getInstance();
contador1.incrementar();
contador1.incrementar();
const contador2 = contador_1.EventCounter.getInstance();
contador2.incrementar();
console.log("Total acumulado:", contador2.obtenerTotal()); // 3
console.log("¿Son la misma instancia?", contador1 === contador2); // true
