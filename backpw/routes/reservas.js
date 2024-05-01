const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservas');

// Rutas para las operaciones de reservas
router.post('/', reservasController.crearReserva);
router.get('/:id', reservasController.obtenerReservaPorId);
router.get('/', reservasController.obtenerReservas);
router.put('/:id', reservasController.actualizarReserva);
router.delete('/:id', reservasController.eliminarReserva);

module.exports = router;