const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.getUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario por ID
const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.getUsuarioById(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Crear un nuevo usuario
const createUsuario = async (req, res) => {
  const { nombre, email, password, rol, especialidad_id, consultorio_id } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.createUsuario({
      nombre,
      email,
      password: hashedPassword,
      rol,
      especialidad_id,
      consultorio_id
    });
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Iniciar sesión
const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.getUsuarioByEmail(email);
    if (usuario && await bcrypt.compare(password, usuario.password)) {
      const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// Registrar un nuevo usuario
const registerUsuario = async (req, res) => {
  const { nombre, email, password, rol, especialidad_id, consultorio_id } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.createUsuario({
      nombre,
      email,
      password: hashedPassword,
      rol,
      especialidad_id,
      consultorio_id
    });
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  loginUsuario,
  registerUsuario,
};
