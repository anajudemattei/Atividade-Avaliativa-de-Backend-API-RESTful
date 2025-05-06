const express = require('express');
const router = express.Router();
const { exportPacienteToPDF } = require('../controllers/reportController');
  
router.get('/report/pdf', exportPacienteToPDF);
  
module.exports = router;