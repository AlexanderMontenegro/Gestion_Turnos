const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');


router.get('/', UsuarioController.getUsuarios);
router.get('/:id', UsuarioController.getUsuarioById);
router.post('/', UsuarioController.createUsuario);


router.post('/login', UsuarioController.loginUsuario);
router.post('/register', UsuarioController.registerUsuario);

module.exports = router;
