const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientesController");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload"); 
const { exportPacienteToPDF } = require('../controllers/reportController');

router.get('/report/pdf', exportPacienteToPDF, apiKeyMiddleware); 

router.get("/pacientes", pacientesController.getAllPacientes);
router.get("/pacientes/:id", pacientesController.getPaciente);
router.post("/pacientes", upload.single("photo"), pacientesController.createPaciente); 
router.put("/pacientes/:id", pacientesController.updatePaciente);
router.delete("/pacientes/:id", pacientesController.deletePaciente);

module.exports = router;