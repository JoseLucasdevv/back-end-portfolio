const transport = require("../transport");

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
    if (!formName || !formEmail || !formMessage)
      return res.status(500).send("error invalid request in body");

    await transport.sendMail(email);

    return res.status(201).send("Send Email Success");
  } catch (e) {
    return res.status(500).send("Error send Email");
  }
}

module.exports = {
  emailController,
};
