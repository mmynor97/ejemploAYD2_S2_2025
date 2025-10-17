// Importa los módulos necesarios de k6
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

// Define una métrica personalizada para el tiempo de compra
const purchaseTime = new Trend('purchase_time');

// Configuración de la prueba con fases (stages) para un aumento gradual de la carga
export const options = {
  stages: [
    // Rampa de calentamiento: aumenta de 0 a 10 VUs en 30 segundos
    { duration: '30s', target: 10 },
    // Carga sostenida: 10 VUs durante 1 minuto
    { duration: '1m', target: 10 },
    // Pico de carga: aumenta a 50 VUs en 30 segundos
    { duration: '30s', target: 50 },
    // Carga de pico: 50 VUs durante 1 minuto
    { duration: '1m', target: 50 },
    // Descenso: baja a 0 VUs en 30 segundos
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    // Tiempos de respuesta para el 95% de las peticiones en cada escenario
    'http_req_duration{scenario:login}': ['p(95)<200'],
    'http_req_duration{scenario:browse_products}': ['p(95)<300'],
    'http_req_duration{scenario:checkout}': ['p(95)<1000'],
    // Tasa de errores general menor al 1%
    'http_req_failed': ['rate<0.01'],
    // Tiempo de compra personalizado
    'purchase_time': ['p(95)<2000'],
  },
};

// Lógica del usuario virtual: se ejecuta para cada usuario en la prueba
export default function () {
  const BASE_URL = 'https://test-api.k6.io';

  // Paso 1: Inicio de sesión (Autenticación)
  let loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
    username: 'test_user',
    password: 'test_password',
  }, { tags: { scenario: 'login' } });

  // Verificación de la respuesta de inicio de sesión
  check(loginRes, {
    'logged in successfully': (r) => r.status === 200,
  });

  // Si el inicio de sesión falla, el script no puede continuar
  if (loginRes.status !== 200) {
    console.log(`Login failed. Status: ${loginRes.status}, Response: ${loginRes.body}`);
    return;
  }
  
  // Extrae el token de autenticación para usarlo en peticiones futuras
  const authToken = loginRes.json().access;

  // Paso 2: Navegar por los productos
  const productsRes = http.get(`${BASE_URL}/public/crocodiles/`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    tags: { scenario: 'browse_products' },
  });

  // Verificación de la respuesta de la navegación de productos
  check(productsRes, {
    'product list is valid': (r) => r.status === 200,
  });

  // Pausa para simular el tiempo que el usuario pasa en la página
  sleep(1);

  // Paso 3: Realizar una compra
  const startTime = Date.now();
  const checkoutRes = http.post(`${BASE_URL}/checkout/`, JSON.stringify({
    items: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ],
  }), {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    tags: { scenario: 'checkout' },
  });

  // Añade el tiempo de la transacción de compra a la métrica personalizada
  purchaseTime.add(Date.now() - startTime);

  // Verificación de la respuesta de la compra
  check(checkoutRes, {
    'checkout successful': (r) => r.status === 201,
  });
  
  // Pausa final antes de que el usuario virtual complete su ciclo
  sleep(1);
}