import * as nodemailer from 'nodemailer';
import config from '../config/config';
const transporter = nodemailer.createTransport({
  host: config.SMTP.HOST,
  port: parseInt(config.SMTP.PORT, 10),
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: config.SMTP.USER,
    pass: config.SMTP.PASSWORD,
  },
});

export async function sendEmail(
  to: string,
  subject: string,
  text: string
): Promise<void> {
  const mailOptions = {
    from: config.SMTP.USER,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
}
