const pool = require("../config/database");

const getPacientes = async () => {
    const result = await pool.query("SELECT * FROM pacientes");
    return result.rows;
};

const getPacienteById = async (id) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE id = $1", [id]);
    return result.rows[0];
};

const createPaciente = async (name, email, idade) => {
    const result = await pool.query(
        "INSERT INTO pacientes (name, email, idade) VALUES ($1, $2, $3) RETURNING *", 
        [name, email, idade]
    );
    return result.rows[0];
};

const updatePaciente = async (id, name, email, idade) => {
    const result = await pool.query(
        "UPDATE pacientes SET name = $1, email = $2, idade = $3 WHERE id = $4 RETURNING *",
        [name, email, idade, id]
    );
    return result.rows[0];
};

const deletePaciente = async (id) => {
    const result = await pool.query("DELETE FROM pacientes WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Paciente não encontrado." };
    }

    return { message: "Paciente deletado com sucesso." };
};

module.exports = { getPacientes, getPacienteById, createPaciente, updatePaciente, deletePaciente };

