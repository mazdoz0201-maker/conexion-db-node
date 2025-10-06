const express = require('express');
const connection = require('./db');
const app = express();
const port = 3000;

// Ruta principal que muestra los clientes en HTML
app.get('/customers', (req, res) => {
  connection.query('SELECT * FROM customer', (err, results) => {
    if (err) {
      res.send('Error al recuperar los datos: ' + err);
      return;
    }

    // Construir HTML simple
    let html = `
      <h1>Lista de Clientes</h1>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
        </tr>
    `;

    results.forEach(customer => {
      html += `
        <tr>
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.email}</td>
          <td>${customer.phone}</td>
        </tr>
      `;
    });

    html += '</table>';
    res.send(html);
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/customers`);
});
