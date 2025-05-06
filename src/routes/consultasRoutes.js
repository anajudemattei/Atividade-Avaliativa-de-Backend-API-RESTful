const express = require("express");
const router = express.Router();
const consultaController = require("../controllers/consultasController");
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload"); 

router.use(apiKeyMiddleware);

router.get("/consultas", consultaController.getAllConsultas);
router.get("/consulta/:id", consultaController.getConsulta);
router.post("/consultas", upload.single("photo"), consultaController.createConsulta); 
router.put("/consultas/:id", consultaController.updateConsulta);
router.delete("/consultas/:id", consultaController.deleteConsulta);

module.exports = router;