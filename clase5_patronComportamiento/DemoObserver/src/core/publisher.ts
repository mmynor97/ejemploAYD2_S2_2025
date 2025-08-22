import { Subject, Observer } from "./observer";

export class Publisher<T> implements Subject<T> {
  private observers = new Set<Observer<T>>();

  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    // Función para desuscribirse (comodísima de usar)
    return () => this.unsubscribe(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers.delete(observer);
  }

  async notify(data: T): Promise<void> {
    // Notifica a todos los observadores de forma segura (no se cae si uno falla)
    const tasks = [...this.observers].map((obs) => Promise.resolve().then(() => obs.update(data)));
    const results = await Promise.allSettled(tasks);
    // (Opcional) Manejo de errores por observador
    results.forEach((res, idx) => {
      if (res.status === "rejected") {
        console.error(`[Publisher] Error notificando a observer #${idx}:`, res.reason);
      }
    });
  }
}   