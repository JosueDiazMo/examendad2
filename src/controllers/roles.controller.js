import { pool } from "../database";

export const getRoles = async(req, res) => {
    try {
        const response = await pool.query('select * from fc_listar_rol()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar los Roles');
    }
}
export const getRolesId = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_rol_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar los Roles');
    }
}
export const crearRoles = async(req, res) => {
    try {
        const { titulo } = req.body;
        await pool.query('select * from fc_create_rol($1)', [titulo]);
        return res.status(200).json({
            message: 'Rol registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Rol');
    }
};
export const updateRoles = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { titulo, descripcion } = req.body;
        await pool.query('select * from fc_update_rol($1, $2, $3)', [titulo, descripcion, id]);
        return res.status(200).json({
            message: 'Rol modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar el rol' + e);
    }
};
export const deleteRoles = async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('select * from fc_delete_rol($1)', [id]);
        return res.status(200).json({
            message: 'Post eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar el post' + e);
    }
};