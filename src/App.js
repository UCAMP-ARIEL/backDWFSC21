require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Database/db.js");

//Inicio la DB de MONGO
connectDB();
//MIDDLEWARES
app.use(cors());

//Express.json() habilita el uso de archivos Json y el acceso al body de mi llamada
app.use(express.json());

//Traigo y conecto las rutas de usuario
app.use("/api/users", require("./routes/user.routes.js"));

/**inicio del servidor, siempre va al final de mi archivo */
app.listen(process.env.PORT, () => {
  console.log(`Escuchando el puerto ${process.env.PORT}`);
});
