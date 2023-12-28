const express = require("express");
const { emailController } = require("../controller/sendEmailController");

const routes = express.Router();

routes.get("/", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f0f0;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
      <title>Bem-vindo à API Send Email</title>
    </head>
    <body>
      <h1>Bem-vindo à API Send Email</h1>
      <p>Obrigado por se juntar a nós!</p>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

routes.post("/email", emailController);

routes.get("/email", emailController);

module.exports = {
  routes,
};
