

const http = require('http');
const url = require('url');

const servidor = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const partes = parsedUrl.pathname.split('/').filter(p => p); 

  if (req.method === 'GET' && partes[0] === 'cuadrado' && partes[1]) {
    const numero = parseFloat(partes[1]);

    if (!isNaN(numero)) {
      const resultado = numero * numero;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ resultado }));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Número inválido' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

servidor.listen(3000, () => {
  console.log('🟢 Servidor sin framework en http://localhost:3000');
});
