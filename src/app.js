const express = require("express");

const { routes } = require("./routes/router");
const cors = require("cors");

const app = express();

// MIDDLEWARES App

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use Router app

app.use(routes);

// export app to server.js
module.exports = {
  app,
};
