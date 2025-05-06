const pool = require("../config/database");

const getPacientes = async () => {
    try {
        console.log('Tentando buscar pacientes...');
        const result = await pool.query('SELECT * FROM pacientes');
        console.log('Pacientes encontrados:', result);
        return result.rows;
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error.message);
        throw error;
    }
};

const getPacienteById = async (id) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE id = $1", [id]);
    return result.rows[0];
};

const createPaciente = async (name, email, idade, photo) => {
    const result = await pool.query(
        "INSERT INTO pacientes (name, email, idade, photo) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, idade, photo]
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

const getPacientesByAge = async (idade) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE idade = $1", [idade]);
    return result.rows;
};

module.exports = { getPacientes, getPacienteById, createPaciente, updatePaciente, deletePaciente, getPacienteById, getPacientesByAge };

