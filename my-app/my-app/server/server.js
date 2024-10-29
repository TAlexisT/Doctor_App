const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       
  user: 'root',             
  password: '',              
  database: 'doc'  
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
