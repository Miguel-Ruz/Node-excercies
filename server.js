const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

app.listen(port, () => {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});
