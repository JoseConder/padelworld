# Instrucciones para probar los cambios recientes

Hola, si quieren probar los cambios recientes necesitan tener el **MySQL** y cambiar los datos para la conexión específica de su base de datos local.

## Correr el servidor

Para correr el servidor es necesario estar dentro de la carpeta del backend y usar:
```cmd
npm start
```
Automáticamente la consola les dice el puerto activo.

## Probar los CRUD

Les recomiendo usar **Postman** para probar los CRUD.

## Placeholders para probar la funcionalidad

Pueden usar los siguientes placeholders para probar la funcionalidad:

### Crear usuarios

```json
{
  "nombre": "NombreUsuario",
  "pwd": "password123",
  "tipoDeUsuario": "tipo_de_usuario",
  "tipoDeCuenta": "tipo_de_cuenta"
}
```
### Crear canchas
```json

{
  "numero": 1,
  "estado": "Disponible",
  "localizacion": "Calle Principal"
}
```
### crear reservas
```json
{
  "hora": "09:00",
  "duracion": 60,
  "idUsuario": 1,
  "idCancha": 1
}
```
### Otros
para las demas partes del CRUD es importante recordar el uso de get para pedir todos los datos
tambien el get se usa de forma especifica para obtener un dato especifico con /:id, por ejemplo /usuario/1234
el put y el delete funcionan de la misma forma, es necesario usar el id especifico.
