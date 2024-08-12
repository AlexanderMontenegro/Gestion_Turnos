const Usuario = require('../models/usuario');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.getUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

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

const createUsuario = async (req, res) => {
  const usuario = req.body;
  try {
    const nuevoUsuario = await Usuario.createUsuario(usuario);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Otros controladores (actualizar, eliminar) se agregarán aquí

module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  // Otros controladores se exportarán aquí
};
