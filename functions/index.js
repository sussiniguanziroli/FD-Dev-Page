/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "facildigitalcontacto@gmail.com",
    pass: "sylz dswd pgfh alnq", // Asegúrate de que esta es la contraseña de la aplicación generada en tu cuenta de Google.
  },
  tls: {
    rejectUnauthorized: false,
  },
});
exports.sendEmail = functions.firestore.document("mails/{messageId}")
    .onCreate(async (snap, context) => {
      const data = snap.data();
      const mailOptions = {
        from: "facildigitalcontacto@gmail.com",
        to: data.to,
        subject: data.message.subject,
        text: data.message.text, // El texto plano
        html: data.message.html, // El contenido en HTML
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Correo enviado con éxito");
      } catch (error) {
        console.error("Error al enviar el correo: ", error);
      }
    });
