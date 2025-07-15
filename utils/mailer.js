import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",  // host sandbox de Mailtrap
  port: 587,
  auth: {
    user: process.env.MAIL_USER,      //  username Mailtrap dans .env
    pass: process.env.MAIL_PASS       // password Mailtrap dans .env
  }
});

export const sendVerificationEmail = (to, link) => {
  const mailOptions = {
    from: '"Support HandiBlog" <no-reply@handiblog.com>',
    to,
    subject: 'Vérification de votre compte',
    html: `<p>Votre lien de vérification :</p>
           <p>Cliquez <a href="${link}">ici</a> pour valider votre compte</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error('Erreur email:', error);
    else console.log('📧 Email de vérification envoyé :', info.response);
  });
};
