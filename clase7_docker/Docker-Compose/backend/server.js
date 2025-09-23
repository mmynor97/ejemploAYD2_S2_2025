
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend de Docker!' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});