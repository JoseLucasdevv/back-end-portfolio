const express = require("express");
const { emailController } = require("../controller/sendEmailController");

const routes = express.Router();

routes.get("/", welcomeControler);

routes.post("/email", emailController);

routes.get("/email", emailController);

module.exports = {
  routes,
};
