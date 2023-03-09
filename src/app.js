const express = require("express");
const dataBase = require("./utils/database");

const PORT = 8000;

dataBase.authenticate()
  .then(() => {
    console.log("Conexión de base de datos OK");
  })
  .catch((e) => {
    console.log(e);
  });
