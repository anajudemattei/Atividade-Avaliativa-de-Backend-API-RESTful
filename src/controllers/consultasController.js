const consultaModel = require("../models/consultasModel");

const getAllConsultas = async (req, res) => {
    try {
        const consultas = await consultaModel.getConsultas();
        res.json(consultas);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar consultas." });
    }
};

const getConsulta = async (req, res) => {
    try {
        const consulta = await consultaModel.getConsultaById(req.params.id);
        if (!consulta) {
            return res.status(404).json({ message: "Consulta não encontrado." });
        }
        res.json(consulta);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar consulta." });
    }
};

const createConsulta = async (req, res) => {
    try {
        const { name, paciente, data, hora } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newConsulta = await consultaModel.createConsulta(name, paciente, data, hora, photo);
        res.status(201).json(newConsulta);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "Item já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar consulta." });
    }
};

const updateConsulta = async (req, res) => {
    try {
        const { name, paciente, data, hora } = req.body;
        const updatedConsulta = await consultaModel.updateConsulta(req.params.id, name, paciente, data, hora);
        if (!updatedConsulta) {
            return res.status(404).json({ message: "Consulta não encontrado." });
        }
        res.json(updatedConsulta);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar consulta." });
    }
};

const deleteConsulta = async (req, res) => {
    try {
        const message = await consultaModel.deleteConsulta(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar consulta." });
    }
};

module.exports = { getAllConsultas, getConsulta, createConsulta, updateConsulta, deleteConsulta };

