// Importa los módulos necesarios de k6
import http from 'k6/http';
import { check, sleep } from 'k6';

// Configuración de la prueba
export const options = {
  // Define el número de usuarios virtuales (VUs) y la duración de la prueba
  vus: 500,       // 10 usuarios virtuales
  duration: '30s',  // duración de 30 segundos

  // Establece umbrales (thresholds) para criterios de éxito
  thresholds: {
    // El 95% de las peticiones deben completarse en menos de 500ms
    http_req_duration: ['p(99)<500'], 
    // La tasa de errores debe ser menor al 1%
    http_req_failed: ['rate<0.01'], 
  },
};

// Lógica del "usuario virtual"
export default function () {
  // Realiza una petición GET a la API
  const res = http.get('https://test-api.k6.io/public/crocodiles/'); 

  // Verifica que el código de estado de la respuesta sea 200
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Pausa de 1 segundo entre peticiones para simular un comportamiento realista
  sleep(1);
}