require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pacientesRoutes = require("./src/routes/pacientesRoutes"); 
const consultasRoutes = require("./src/routes/consultasRoutes");
const reportRoutes = require("./src/routes/reportRoutes");

const app = express();

const corsOptions = {
    origin: "http://localhost:3001", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", pacientesRoutes);
app.use("/api", consultasRoutes); 
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});