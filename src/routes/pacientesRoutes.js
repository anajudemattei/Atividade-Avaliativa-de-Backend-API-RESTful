const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientesController");

router.get("/pacientes", pacientesController.getAllPacientes);
router.get("/pacientes/:id", pacientesController.getPaciente);
router.post("/paciente", pacientesController.createPaciente);
router.put("/pacientes/:id", pacientesController.updatePaciente);
router.delete("/pacientes/:id", pacientesController.deletePaciente);

module.exports = router;
