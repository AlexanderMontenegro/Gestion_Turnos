const express = require('express');
const router = express.Router();
const { getAllTurnos, postTurno } = require('../controllers/turnosController');

router.get('/turnos', getAllTurnos);
router.post('/turnos', postTurno);

module.exports = router;
