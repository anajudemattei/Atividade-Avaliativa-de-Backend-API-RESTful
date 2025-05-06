const PDFDocument = require('pdfkit');
const pacienteModel = require('../models/pacientesModel');
const consultasModel = require('../models/consultasModel');

const exportPacienteToPDF = async (req, res) => {
    try {
        console.log('Iniciando geração do PDF...');

        const pacientes = await pacienteModel.getPacientes();
        const consultas = await consultasModel.getConsultas(); 
        console.log('Pacientes recuperados:', pacientes);
        console.log('Consultas recuperadas:', consultas);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=relatorio.pdf');

        const doc = new PDFDocument();
        doc.pipe(res);

        doc.fontSize(20).text('Relatório de Pacientes e Consultas', { align: 'center' });
        doc.moveDown();

        doc.fontSize(16).text('Lista de Pacientes:', { align: 'left' });
        doc.moveDown();

        pacientes.forEach(paciente => {
            console.log('Processando paciente:', paciente);
            doc.fontSize(12).text(`ID: ${paciente.id}`);
            doc.text(`Nome: ${paciente.name}`);
            doc.text(`Email: ${paciente.email}`);
            doc.text(`Idade: ${paciente.idade}`);
            doc.moveDown();
        });

        doc.addPage(); 

        doc.fontSize(16).text('Lista de Consultas:', { align: 'left' });
        doc.moveDown();

        consultas.forEach(consulta => {
            console.log('Processando consulta:', consulta);
            doc.fontSize(12).text(`ID da Consulta: ${consulta.id}`);
            doc.text(`Paciente ID: ${consulta.paciente_id}`);
            doc.text(`Data: ${consulta.data}`);
            doc.text(`Descrição: ${consulta.descricao}`);
            doc.moveDown();
        });

        doc.end();
        console.log('PDF gerado com sucesso!');
    } catch (error) {
        console.error("Erro ao gerar o PDF:", error.message);
        res.status(500).json({ message: 'Erro ao gerar o PDF', error });
    }
};

module.exports = { exportPacienteToPDF };