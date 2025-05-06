require("dotenv").config();

const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.header("x-api-key");
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: "Chave da API não fornecida ou inválida!" });
    }
    next();
};

module.exports = apiKeyMiddleware;