const router = require('express').Router();
const { datospersonales, direccion, carrera } = require('../conexion/database');

// Rutas para la tabla datospersonales
// Consultar registros de la tabla datospersonales
router.get('/consulta', async (req, res) => {
    const consultadp = await datospersonales.findAll();
    res.status(200).json({ body: consultadp });
});

// Consultar un registro en la tabla datospersonales mediante el id
router.get('/consulta/:iddp', async (req, res) => {
    const iddp = req.params.iddp;
    const consultadp = await datospersonales.findOne({ where: { id: iddp } });
    res.status(200).json({ body: consultadp });
});

// Insertar un nuevo registro en la tabla datospersonales
router.post('/insertar', async (req, res) => {
    const dp = req.body;
    const insertardp = await datospersonales.create(dp);
    res.status(200).json({ body: insertardp });
});

// Eliminar un registro en la tabla datospersonales
router.delete('/eliminar/:iddp', async (req, res) => {
    const iddp = req.params.iddp;  // Obtén el ID del registro desde los parámetros de la URL
    try {
        const eliminado = await datospersonales.destroy({ where: { id: iddp } });
        if (eliminado) {
            res.status(200).json({ message: `Registro con ID ${iddp} eliminado correctamente` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${iddp}` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
});

// Actualizar un registro de la tabla datospersonales
router.put('/actualizar/:iddp', async (req, res) => {
    const iddp = req.params.iddp; // Obtenemos el ID del parámetro de la URL
    const { nombre, apellidopaterno, apellidomaterno, telefono, correo, contraseña } = req.body;


    try {
        // Actualizamos el registro con los nuevos valores
        const [actualizado] = await datospersonales.update(
            { nombre, apellidopaterno, apellidomaterno, telefono, correo, contraseña },
            { where: { id: iddp } }
        );

        if (actualizado) {
            res.status(200).json({ message: `Registro con ID ${iddp} actualizado exitosamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${iddp}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el registro.', error });
    }
});

// Rutas para la tabla direccion
//consultar registros de la tabla direccion
router.get('/consulta_direccion', async (req, res) => {
    const consultadireccion = await direccion.findAll();
    res.status(200).json({ body: consultadireccion });
});

//consultar un registro en la tabla direccion mediante el id
router.get('/consulta_direccion/:iddir', async (req, res) => {
    const iddir = req.params.iddir;
    const consultadireccion = await direccion.findOne({ where: { id_dir: iddir } });
    res.status(200).json({ body: consultadireccion });
});

// Insertar un nuevo registro en la tabla direccion
router.post('/insertar_direccion', async (req, res) => {
    const dir = req.body;
    const insertardireccion = await direccion.create(dir);
    res.status(200).json({ body: insertardireccion });
});

// Eliminar un registro de la tabla direccion
router.delete('/eliminar_direccion/:iddir', async (req, res) => {
    const iddir = req.params.iddir;  // Obtén el ID del registro desde los parámetros de la URL
    try {
        const eliminado = await direccion.destroy({ where: { id_dir: iddir } });
        if (eliminado) {
            res.status(200).json({ message: `Registro con ID ${iddir} eliminado correctamente` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${iddir}` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
});

// Actualizar un registro de la tabla direccion
router.put('/actualizar_direccion/:iddir', async (req, res) => {
    const iddir = req.params.iddir; // Obtenemos el ID del parámetro de la URL
    const { calle,colonia,municipio,codigo_postal,num } = req.body;
    
    try {
        // Actualizamos el registro con los nuevos valores
        const [actualizado] = await direccion.update(
            { calle,colonia,municipio,codigo_postal,num},
            { where: { id_dir: iddir } }
        );

        if (actualizado) {
            res.status(200).json({ message: `Registro con ID ${iddir} actualizado exitosamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${iddir}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el registro nuevo.' });
    }
});



// Rutas para la tabla carrera
// Consultar registros de la tabla carrera
router.get('/consulta_carrera', async (req, res) => {
    const consultacarrera = await carrera.findAll();
    res.status(200).json({ body: consultacarrera });
});

// Consultar un registro en la tabla carrera mediante el id
router.get('/consulta_carrera/:idcar', async (req, res) => {
    const idcar = req.params.idcar;
    const consultacarrera = await carrera.findOne({ where: { id_car: idcar } });
    res.status(200).json({ body: consultacarrera });
});

// Insertar un nuevo registro en la tabla carrera
router.post('/insertar_carrera', async (req, res) => {
    const car = req.body;
    const insertarcarrera = await carrera.create(car);
    res.status(200).json({ body: insertarcarrera });
});

// Eliminar un registro en la tabla carrera
router.delete('/eliminar_carrera/:idcar', async (req, res) => {
    const idcar = req.params.idcar;  // Obtén el ID del registro desde los parámetros de la URL
    try {
        const eliminado = await carrera.destroy({ where: { id_car: idcar } });
        if (eliminado) {
            res.status(200).json({ message: `Registro con ID ${idcar} eliminado correctamente` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${idcar}` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
});

// Actualizar un registro de la tabla direccion
router.put('/actualizar_carrera/:idcar', async (req, res) => {
    const idcar = req.params.idcar; // Obtenemos el ID del parámetro de la URL
    const { nombre_car,nombre_uni,semestre,especialidad} = req.body;
    
    try {
        // Actualizamos el registro con los nuevos valores
        const [actualizado] = await carrera.update(
            { nombre_car,nombre_uni,semestre,especialidad},
            { where: { id_car: idcar } }
        );

        if (actualizado) {
            res.status(200).json({ message: `Registro con ID ${idcar} actualizado exitosamente.` });
        } else {
            res.status(404).json({ message: `No se encontró un registro con ID ${idcar}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el registro.' });
    }
});
module.exports = router;
