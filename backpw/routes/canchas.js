// canchasRoutes.js

const express = require('express');
const router = express.Router();
const canchasController = require('../controllers/canchas');

// Rutas para las operaciones de canchas
router.post('/', canchasController.crearCancha);

module.exports = router;
