const express = require('express');
const router = express.Router();
const calendarioController = require('../controllers/calendario');

// Rutas para las operaciones de reservas
router.get('/', calendarioController.obtenerReservasParaCalendario);

module.exports = router;