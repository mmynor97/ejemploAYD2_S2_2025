const express = require('express');
const app = express();

app.get('/cuadrado/:numero', (req, res) => {
  const numero = parseFloat(req.params.numero);

  if (isNaN(numero)) {
    return res.status(400).json({ error: 'Número inválido' });
  }

  const resultado = numero * numero;
  res.json({ resultado });
});

app.listen(3000, () => {
  console.log('🔵 Servidor con Express en http://localhost:3000');
});