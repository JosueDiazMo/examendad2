import { pool } from '../database'

export const getPersonas = async(req, res) => {
    try { //select *from fc_listar_persona();
        const reponse = await pool.query('select * from fc_listar_persona()');
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar Persona => ' + error.message);
    }
};

export const crearPersonas = async(req, res) => {
    try {
        const { apellidos, nombres, direccion, telefono } = req.body;
        await pool.query('select * from fc_create_persona($1,$2,$3,$4)', [apellidos, nombres, direccion, telefono]);
        return res.status(200).json({
            message: 'Persona registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Persona => ' + error.message);
    }
};