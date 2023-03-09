const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dataBase = require("./utils/database");
const initModel = require("./models/initModel");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());



dataBase
  .authenticate()
  .then(() => {
    console.log("Conexión de base de datos OK");
  })
  .catch((e) => {
    console.log(e);
  });
  
initModel();

dataBase.sync()
.then(() => console.log("Base de datos sync"))
.catch((error) => console.log(error));

const PORT = 8000;
