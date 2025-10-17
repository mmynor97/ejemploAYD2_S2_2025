const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para habilitar CORS (para que k6 pueda acceder a la API)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint de prueba que responde rápidamente (simula una página de inicio)
app.get('/api/saludo', (req, res) => {
  res.status(200).json({ message: 'Hola, esta es una respuesta rápida.' });
});

// Endpoint que simula una carga de trabajo pesada
app.get('/api/carga', (req, res) => {
  // Simula una operación que consume mucho CPU
  const startTime = Date.now();
  let result = 0;
  for (let i = 0; i < 50000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(`Petición /api/carga procesada en ${duration} ms.`);

  res.status(200).json({
    message: 'Esta es una respuesta después de un cálculo pesado.',
    calculation_duration_ms: duration
  });
});

// Endpoint que simula una base de datos lenta (respuesta con delay)
app.get('/api/lento', (req, res) => {
  const delay = Math.floor(Math.random() * 2000) + 500; // Delay aleatorio entre 500 y 2500ms
  setTimeout(() => {
    res.status(200).json({
      message: `Esta respuesta fue intencionalmente lenta.`,
      delay_ms: delay
    });
  }, delay);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor de la API de prueba corriendo en http://localhost:${PORT}`);
});