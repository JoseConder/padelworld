const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Crear una reserva
async function crearReserva(req, res) {
    try {
      const { hora, duracion, idUsuario, idCancha } = req.body;
      const nuevaReserva = await prisma.reserva.create({
        data: {
          hora,
          duracion,
          usuario: { connect: { id: idUsuario } },
          cancha: { connect: { id: idCancha } }
        }
      });
      res.json(nuevaReserva);
    } catch (error) {
      console.error('Error al crear reserva:', error);
      res.status(500).json({ error: 'Error al crear reserva' });
    }
  }


// Obtener una reserva por su ID
async function obtenerReservaPorId(req, res) {
    const reservaId = parseInt(req.params.id);
    try {
      const reserva = await prisma.reserva.findUnique({
        where: { id: reservaId },
        include: { usuario: true, cancha: true }
      });
      res.json(reserva);
    } catch (error) {
      console.error('Error al obtener reserva:', error);
      res.status(500).json({ error: 'Error al obtener reserva' });
    }
  }

async function obtenerReservas(req, res) {
  try {
    const reservas = await prisma.reserva.findMany({
      include: { usuario: true, cancha: true }
    });
    res.json(reservas);
  } catch (error) {
    console.error('Error al obtener todas las reservas:', error);
    res.status(500).json({ error: 'Error al obtener todas las reservas' });
  }
}

// Actualizar una reserva por su ID
async function actualizarReserva(req, res) {
    const reservaId = parseInt(req.params.id);
    try {
      const { hora, duracion } = req.body;
      const reservaActualizada = await prisma.reserva.update({
        where: { id: reservaId },
        data: { hora, duracion }
      });
      res.json(reservaActualizada);
    } catch (error) {
      console.error('Error al actualizar reserva:', error);
      res.status(500).json({ error: 'Error al actualizar reserva' });
    }
  }

// Eliminar una reserva por su ID
async function eliminarReserva(req, res) {
    const reservaId = parseInt(req.params.id);
    try {
      await prisma.reserva.delete({ where: { id: reservaId } });
      res.json({ message: 'Reserva eliminada correctamente' });
    } catch (error) {
      console.error('Error al eliminar reserva:', error);
      res.status(500).json({ error: 'Error al eliminar reserva' });
    }
  }

module.exports = {
  crearReserva,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  obtenerReservas
};
