const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  service: "gmail",
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

async function emailController(req, res) {
  const { formName, formEmail, formMessage } = req.body;

  const email = {
    from: formName + "<" + formEmail + ">",
    to: "joselucas.dev@gmail.com",
    subject: "portfolio Subject",
    text: formMessage,
    html: `<p>Email:${formEmail} <br> Message:<b>${formMessage}<b/></p>`,
  };

  try {
    await transport.sendMail(email);
    return res.status(201).send("Send Email Success");
  } catch (e) {
    return res.status(500).send("Error send Email");
  }
}

module.exports = {
  emailController,
};
