import http from 'k6/http';
import { check, slepp} from 'k6';
import { Trend } from 'k6/metrics';

const purchaseTime = new Trend('purchase_time');

export const options = {
    stages : [
        {duration: '30s', target: 10},
        {duration: '1m', target: 10},
        {duration: '30s', target: 50},
        {duration: '1m', target: 100},
        {duration: '30s', target: 150},
        {duration: '30s', target: 200},
        {duration: '30s', target: 250},
        {duration: '30s', target: 100000000},
        {duration: '30s', target: 100},
        {duration: '30s', target: 50},

    ],

    hresholds: {
        'http_req_duration{scenario:login}': ['p(95)<200'],
        'http_req_duration{scenario:browse_products}': ['p(95)<300'],
        'http_req_duration{scenario:checkout}': ['p(95)<1000'],
        'http_req_failed': ['rate<0.01'],
        'purchase_time': ['p(95)<2000'],
    },

    
};

export default function () {
    const BASE_URL = 'https://test-api.k6.io';

    let loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
    username: 'test_user',
    password: 'test_password',
  }, { tags: { scenario: 'login' } });

  check(loginRes, {
    'logged in successfully': (r) => r.status === 200,
  });

  if (loginRes.status !== 200) {
    console.log(`Login failed. Status: ${loginRes.status}, Response: ${loginRes.body}`);
    return;
  }

  const authToken = loginRes.json().access;

  const productsRes = http.get(`${BASE_URL}/public/crocodiles/`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    tags: { scenario: 'browse_products' },
  });

    check(productsRes, {
    'product list is valid': (r) => r.status === 200,
  });

   sleep(1);

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
  purchaseTime.add(Date.now() - startTime);

  check(checkoutRes, {
    'checkout successful': (r) => r.status === 201,
  });

  slepp(1);

}
