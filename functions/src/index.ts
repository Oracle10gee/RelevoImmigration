/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "olakunleayedun@gmail.com",
    pass: "olakunle12345",
  },
});


export const sendEmail = functions.https.onCall(async (data, context) => {
  const {name, email, message, customMessage} = data;

  const mailOptions = {
    from: "Olakunle <olakunleayedun@gmail.com>",
    to: email,
    subject: "Your Subject",
    text: `Hello ${name},\n\n${message}\n\n${customMessage}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {success: true, message: "Email sent successfully!"};
  } catch (error) {
    console.error("Error sending email:", error);
    return {success: false, message: "Failed to send email."};
  }
});


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
