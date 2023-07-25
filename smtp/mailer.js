import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});
export function send_mail(to, subject, text) {
  const mailOptions = {
    from: "test@gmail.com",
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
