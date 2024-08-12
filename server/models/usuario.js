const pool = require('../db');

// Obtener todos los usuarios
const getUsuarios = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
};

// Obtener un usuario por ID
const getUsuarioById = async (id) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
  return result.rows[0];
};

// Obtener un usuario por email
const getUsuarioByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return result.rows[0];
};

// Crear un nuevo usuario
const createUsuario = async (usuario) => {
  const { nombre, email, password, rol, especialidad_id, consultorio_id } = usuario;
  const result = await pool.query(
    `INSERT INTO usuarios (nombre, email, password, rol, especialidad_id, consultorio_id)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [nombre, email, password, rol, especialidad_id, consultorio_id]
  );
  return result.rows[0];
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  getUsuarioByEmail,
  createUsuario,
};
