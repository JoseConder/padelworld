// canchasController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Función para crear una nueva cancha
async function crearCancha(req, res) {
  const { numero, estado, localizacion } = req.body;
  
  try {
    const nuevaCancha = await prisma.cancha.create({
      data: {
        numero,
        estado,
        localizacion
      }
    });
    res.status(201).json({ success: true, message: "¡Cancha creada exitosamente!", data: nuevaCancha });
  } catch (error) {
    console.error("Error al crear la cancha:", error);
    res.status(500).json({ success: false, error: "Error al crear la cancha" });
  }
}

async function obtenerCancha(req, res) {
  const canchaId = parseInt(req.params.id);
  try {
    const cancha = await prisma.cancha.findUnique({
      where: { id: canchaId },
      include: { reservas: true }
    });
    res.json(cancha);
  } catch (error) {
    console.error('Error al obtener cancha:', error);
    res.status(500).json({ error: 'Error al obtener cancha' });
  }
}

async function obtenerTodasLasCanchas(req, res) {
  try {
    const canchas = await prisma.cancha.findMany({
      include: { reservas: true } 
    });
    res.json(canchas);
  } catch (error) {
    console.error('Error al obtener todas las canchas:', error);
    res.status(500).json({ error: 'Error al obtener todas las canchas' });
  }
}

async function actualizarCancha(req, res) {
  const canchaId = parseInt(req.params.id);
  try {
    const { numero, estado, localizacion } = req.body;
    const canchaActualizada = await prisma.cancha.update({
      where: { id: canchaId },
      data: { numero, estado, localizacion }
    });
    res.json(canchaActualizada);
  } catch (error) {
    console.error('Error al actualizar cancha:', error);
    res.status(500).json({ error: 'Error al actualizar cancha' });
  }
}

async function eliminarCancha(req, res) {
  const canchaId = parseInt(req.params.id);
  try {
    const canchaBorrada = await prisma.cancha.delete({
      where: { id: canchaId }
    });
    res.json(canchaBorrada);
  } catch (error) {
    console.error('Error al borrar cancha:', error);
    res.status(500).json({ error: 'Error al borrar cancha' });
  }
}

module.exports = { crearCancha, obtenerCancha, obtenerTodasLasCanchas, actualizarCancha, eliminarCancha };