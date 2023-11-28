// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const transport = nodemailer.createTransport({
//   host: "",
//   port: "",
//   secure: true,
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS,
//   },
// });

function emailController(req, res) {
  const { formName, formEmail, formMessage } = req.body;
  console.log(formName, formEmail, formMessage);
}
async function welcomeControler(req, res) {
  await res.send({
    message: "welcome API",
  });
}

module.exports = {
  emailController,
  welcomeControler,
};
