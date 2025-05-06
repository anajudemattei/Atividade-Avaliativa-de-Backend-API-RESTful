const pacienteModel = require("../models/pacientesModel");

const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteModel.getPacientes();
        res.json(pacientes);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar pacientes." });
    }
};

const getPaciente = async (req, res) => {
    try {
        const paciente = await pacienteModel.getPacienteById(req.params.id);
        if (!paciente) {
            return res.status(404).json({ message: "Paciente não encontrado." });
        }
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar paciente." });
    }
};

const createPaciente = async (req, res) => {
    try {
        const { name, email, idade } = req.body;
        const newPaciente = await pacienteModel.createPaciente(name, email, idade);
        res.status(201).json(newPaciente);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { // Código de erro do PostgreSQL para chave única violada
            return res.status(400).json({ message: "Item já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar paciente." });
    }
};

const updatePaciente = async (req, res) => {
    try {
        const { name, email, idade } = req.body;
        const updatedPaciente = await pacienteModel.updatePaciente(req.params.id, name, email, idade);
        if (!updatedPaciente) {
            return res.status(404).json({ message: "Paciente não encontrado." });
        }
        res.json(updatedPaciente);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar paciente." });
    }
};

const deletePaciente = async (req, res) => {
    try {
        const message = await pacienteModel.deletePaciente(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar paciente." });
    }
};

module.exports = { getAllPacientes, getPaciente, createPaciente, updatePaciente, deletePaciente };


