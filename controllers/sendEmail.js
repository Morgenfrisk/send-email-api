const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "xp2wsdp27u4smhiy@ethereal.email",
      pass: "3SWn1PC4QZc5u3ynec",
    },
  });

  let info = await transporter.sendMail({
    from: '"Karan Shoery" <karanshoery@gmail.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json({ info });
};

module.exports = sendEmail;
