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

module.exports = {
  emailController,
};
