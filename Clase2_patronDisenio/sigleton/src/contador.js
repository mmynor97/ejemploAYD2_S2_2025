"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCounter = void 0;
class EventCounter {
    constructor() {
        this.contador = 0;
    }
    static getInstance() {
        if (!EventCounter.instance) {
            EventCounter.instance = new EventCounter();
        }
        return EventCounter.instance;
    }
    incrementar() {
        this.contador++;
        console.log(`Evento contado. Total actual: ${this.contador}`);
    }
    obtenerTotal() {
        return this.contador;
    }
}
exports.EventCounter = EventCounter;
