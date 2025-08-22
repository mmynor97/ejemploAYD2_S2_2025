// Observador genérico
export interface Observer<T> {
  update(data: T): void | Promise<void>;
}

// Sujeto (Publisher) genérico
export interface Subject<T> {
  subscribe(observer: Observer<T>): () => void;  // Devuelve función para desuscribirse
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): Promise<void>;
}