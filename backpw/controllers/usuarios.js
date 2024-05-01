const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function crearUsuario(req, res) {
    try {
      const { nombre, pwd, tipoDeUsuario, tipoDeCuenta } = req.body;
      const nuevoUsuario = await prisma.usuario.create({
        data: {
          nombre,
          pwd,
          tipoDeUsuario,
          tipoDeCuenta
        }
      });
      res.json(nuevoUsuario);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
}

async function obtenerUsuarioPorId(req, res) {
    const usuarioId = parseInt(req.params.id);
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: usuarioId },
        include: { reservas: true }
      });
      res.json(usuario);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      res.status(500).json({ error: 'Error al obtener usuario' });
    }
}

async function obtenerTodasLosUsuarios(req, res) {
    try {
      const usuarios = await prisma.usuario.findMany({
        include: { reservas: true }
      });
      res.json(usuarios);
    } catch (error) {
      console.error('Error al obtener todos los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener todos los usuarios' });
    }
}

async function actualizarUsuario(req, res) {
const usuarioId = parseInt(req.params.id);
try {
    const { nombre, pwd, tipoDeUsuario, tipoDeCuenta } = req.body;
    const usuarioActualizado = await prisma.usuario.update({
    where: { id: usuarioId },
    data: { nombre, pwd, tipoDeUsuario, tipoDeCuenta }
    });
    res.json(usuarioActualizado);
} catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ error: 'Error al actualizar usuario' });
}
}

async function eliminarUsuario(req, res) {
const usuarioId = parseInt(req.params.id);
try {
    await prisma.usuario.delete({ where: { id: usuarioId } });
    res.json({ message: 'Usuario eliminado correctamente' });
} catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ error: 'Error al eliminar usuario' });
}
}

module.exports = { crearUsuario, obtenerUsuarioPorId, obtenerTodasLosUsuarios, actualizarUsuario, eliminarUsuario };