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

module.exports = {
  crearCancha,
};
