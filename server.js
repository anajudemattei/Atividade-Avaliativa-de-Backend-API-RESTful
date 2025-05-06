require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pacientesRoutes = require("./src/routes/pacientesRoutes"); 
const consultasRoutes = require("./src/routes/consultasRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", pacientesRoutes);
app.use("/api", consultasRoutes); 
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});