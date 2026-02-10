const express = require("express");
const cors = require("cors");

const clientesRoutes = require("./routes/clientes.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clientesRoutes);

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
