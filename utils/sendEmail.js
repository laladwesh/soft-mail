const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async function sendEmail(to, subject) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"Event Reminder" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text: subject
  });

  console.log(`Email sent to ${to}: ${subject}`);
};
