const { getTurnos, createTurno } = require('../models/turnoModel');

const getAllTurnos = async (req, res) => {
  try {
    const turnos = await getTurnos();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos' });
  }
};

const postTurno = async (req, res) => {
  try {
    const nuevoTurno = await createTurno(req.body);
    res.status(201).json(nuevoTurno);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el turno' });
  }
};

module.exports = { getAllTurnos, postTurno };
