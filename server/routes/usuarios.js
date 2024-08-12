const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('/', UsuarioController.createUsuario);



module.exports = router;
