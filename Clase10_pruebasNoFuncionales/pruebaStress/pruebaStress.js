// Importa los módulos necesarios de k6
import http from 'k6/http';
import { check, sleep } from 'k6';

// Define la configuración de la prueba
export const options = {
  // Escenario: sube rápidamente la carga (ramping-vus)
  scenarios: {
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 20 },  // Sube a 20 VUs en 30 segundos
        { duration: '1m', target: 20 },   // Mantiene la carga
        { duration: '30s', target: 50 },  // Sube a 50 VUs en 30 segundos
        { duration: '1m', target: 50 },   // Mantiene la carga de 50 VUs
        { duration: '30s', target: 0 },    // Baja a 0 VUs en 30 segundos
      ],
    },
  },
  // Umbrales para la prueba de estrés
  thresholds: {
    // Si la tasa de fallos de HTTP supera el 1%, la prueba se considera fallida.
    'http_req_failed': ['rate<0.01'],
    // Si el 99.9% de las peticiones demoran más de 4 segundos, la prueba se considera fallida.
    // Esto es un umbral generoso para un cálculo pesado.
    'http_req_duration': ['p(99.9)<4000'],
  },
};

// Lógica del "usuario virtual"
export default function () {
  const BASE_URL = 'http://localhost:3000'; // URL de la API local

  // Se prueba el endpoint que simula una carga de CPU pesada
  const res = http.get(`${BASE_URL}/api/carga`);

  // Verifica que la respuesta tenga un estado OK (200)
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Pausa de 0.1 segundos para simular un comportamiento más realista
  sleep(0.1);
}