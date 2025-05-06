const pool = require("../config/database");

const getConsultas = async () => {
    const result = await pool.query("SELECT * FROM consultas");
    return result.rows;
};

const getConsultaById = async (id) => {
    const result = await pool.query("SELECT * FROM conultas WHERE id = $1", [id]);
    return result.rows[0];
};

const createConsulta = async (name, email) => {
    const result = await pool.query(
        "INSERT INTO consultas (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
    );
    return result.rows[0];
};

const updateConsulta = async (id, name, email) => {
    const result = await pool.query(
        "UPDATE consultas SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
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

