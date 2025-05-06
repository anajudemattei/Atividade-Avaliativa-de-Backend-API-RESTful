const express = require("express");
const router = express.Router();
const consultaController = require("../controllers/consultasController");

router.get("/consultas", consultaController.getAllConsultas); 
router.get("/consulta/:id", consultaController.getConsulta);
router.post("/consulta", consultaController.createConsulta); 
router.put("/consultas/:id", consultaController.updateConsulta); 
router.delete("/consultas/:id", consultaController.deleteConsulta); 

module.exports = router;
