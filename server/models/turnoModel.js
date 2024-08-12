const pool = require('../config/dbConfig');

const getTurnos = async () => {
  const result = await pool.query('SELECT * FROM turnos');
  return result.rows;
};

const createTurno = async (turno) => {
  const { fecha, hora, doctor_id, cliente_id } = turno;
  const result = await pool.query(
    'INSERT INTO turnos (fecha, hora, doctor_id, cliente_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [fecha, hora, doctor_id, cliente_id]
  );
  return result.rows[0];
};

module.exports = { getTurnos, createTurno };
