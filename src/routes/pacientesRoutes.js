const express = require("express");
const router = express.Router();
const pacientesController = require("../controllers/pacientesController");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload"); 

router.use(apiKeyMiddleware);

router.get("/pacientes", pacientesController.getAllPacientes);
router.get("/pacientes/:id", pacientesController.getPaciente);
router.post("/pacientes", upload.single("photo"), pacientesController.createPaciente); // Adiciona upload
router.put("/pacientes/:id", pacientesController.updatePaciente);
router.delete("/pacientes/:id", pacientesController.deletePaciente);

module.exports = router;