// canchasRoutes.js

const express = require('express');
const router = express.Router();
const canchasController = require('../controllers/canchas');

// Rutas para las operaciones de canchas
router.post('/', canchasController.crearCancha);
router.get('/:id', canchasController.obtenerCancha);
router.get('/', canchasController.obtenerTodasLasCanchas);
router.put('/:id', canchasController.actualizarCancha);
router.delete('/:id', canchasController.eliminarCancha);

module.exports = router;
