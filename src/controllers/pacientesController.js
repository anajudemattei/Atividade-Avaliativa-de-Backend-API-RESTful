const pacienteModel = require("../models/pacientesModel");

const getAllPacientes = async (req, res) => {
    try {
        const { idade } = req.query; 
        let pacientes;
        if (idade) {
            pacientes = await pacienteModel.getPacientesByAge(idade);
        } else {
            pacientes = await pacienteModel.getPacientes();
        }
        res.status(200).json(pacientes);
    } catch (error) {
        console.error("Erro ao buscar pacientes:", error);
        res.status(500).json({ message: "Erro ao buscar pacientes." });
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
        const photo = req.file ? req.file.filename : null; // Nome do arquivo salvo
        const newPaciente = await pacienteModel.createPaciente(name, email, idade, photo);
        res.status(201).json(newPaciente);
    } catch (error) {
        console.error("Erro ao criar paciente:", error);
        if (error.code === "23505") { 
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


