// db.js
const mysql = require('mysql2');

// Configura la conexión
const connection = mysql.createConnection({
  host: 'localhost',        // Si tu DB está en tu máquina
  user: 'root',             // Tu usuario de MySQL
  password: '',             // Tu contraseña
  database: 'epiz_33484226_tolling'
});

// Conectar
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL');
});

module.exports = connection;
