const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obtener todas las reservas para mostrar en el calendario
async function obtenerReservasParaCalendario(req, res) {
  try {
    const reservas = await prisma.reserva.findMany({
      include: { usuario: true, cancha: true }
    }); // Obtener todas las reservas de la base de datos

    const reservasFormateadas = reservas.map(reserva => {
      const fechaReserva = new Date(reserva.fecha);
      const horaInicio = new Date(fechaReserva.setHours(...reserva.hora.split(':')));
      const horaFin = new Date(horaInicio.getTime() + reserva.duracion * 60 * 1000);

      const horaInicioLocal = horaInicio.toLocaleString();
      const horaFinLocal = horaFin.toLocaleString();
    
      return {
        id: reserva.id,
        title: `Reserva - Cancha ${reserva.cancha.numero} - ${fechaReserva.toLocaleDateString()} - ${reserva.hora}`,
        start: horaInicioLocal,
        end: horaFinLocal,
        usuario: reserva.usuario.nombre, 
        cancha: reserva.cancha.numero 
      };
    });
    
    res.json(reservasFormateadas);
  } catch (error) {
    console.error('Error al obtener todas las reservas:', error);
    res.status(500).json({ error: 'Error al obtener todas las reservas' });
  }
}

module.exports = {
  obtenerReservasParaCalendario
};
