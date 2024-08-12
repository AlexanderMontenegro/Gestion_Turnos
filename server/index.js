const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error ejecutando query', err.stack);
  } else {
    console.log('Hora actual en la base de datos:', res.rows[0]);
  }
  pool.end();
});
