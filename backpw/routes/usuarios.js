const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');


router.post('/', usuariosController.crearUsuario);
router.get('/:id', usuariosController.obtenerUsuarioPorId);
router.get('/', usuariosController.obtenerTodasLosUsuarios);
router.put('/:id', usuariosController.actualizarUsuario);
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
