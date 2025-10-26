require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors({ origin: "*" })); // Replace "*" with your frontend domain in production
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const contactEmail = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // e.g., smtp-relay.brevo.com
  port: process.env.SMTP_PORT || 587,
  secure: false,                     // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,     // your Brevo SMTP username
    pass: process.env.SMTP_PASS,     // your Brevo SMTP password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email transport error:", error);
  } else {
    console.log("Email transporter ready to send ✅");
  }
});


router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  if (!email || !message || !firstName) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = `${firstName} ${lastName || ""}`;
  const mail = {
    from: `${name} <${email}>`,        // Sender name and email
    to: process.env.EMAIL_USER,        // Your email to receive messages
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await contactEmail.sendMail(mail);
    console.log("Mail sent successfully ✅");
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("Mail send error:", error);
    res.status(500).json({ code: 500, status: "Error sending email" });
  }
});
