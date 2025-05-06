require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pacientesRoutes = require("./src/routes/pacientesRoutes"); 

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", pacientesRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});