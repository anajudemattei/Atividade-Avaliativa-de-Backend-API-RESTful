const pool = require("../config/database");

const getConsultas = async () => {
    const result = await pool.query("SELECT * FROM consultas");
    return result.rows;
};

const getConsultaById = async (id) => {
    const result = await pool.query("SELECT * FROM consultas WHERE id = $1", [id]); 
    return result.rows[0];
};

const createConsulta = async (name, paciente, data, hora, photo) => {
    const result = await pool.query(
        "INSERT INTO consultas (name, paciente, data, hora, photo) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [name, paciente, data, hora, photo]
    );
    return result.rows[0];
};

const updateConsulta = async (id, name, paciente, data, hora) => {
    const result = await pool.query(
        "UPDATE consultas SET name = $1, paciente = $2, data = $3, hora = $4 WHERE id = $5 RETURNING *",
        [name, paciente, data, hora, id]
    );
    return result.rows[0];
};

const deleteConsulta = async (id) => {
    const result = await pool.query("DELETE FROM consultas WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Usuário não encontrado." };
    }

    return { message: "Usuário deletado com sucesso." };
};

module.exports = { getConsultas, getConsultaById, createConsulta, updateConsulta, deleteConsulta };

