// server.js
require("dotenv").config(); // <-- allows reading EMAIL_USER and EMAIL_PASS from .env
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(cors({ origin: "*" })); // replace "*" with your frontend domain in production
app.use(express.json());
app.use("/", router);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Email transport error:", error);
  } else {
    console.log("Email transporter ready to send ✅");
  }
});


router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  if (!email || !message || !firstName) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = `${firstName} ${lastName || ""}`;
  const mail = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER, // send to yourself
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

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Mail send error:", error);
      res.status(500).json({ code: 500, status: "Error sending email" });
    } else {
      console.log("Mail sent successfully ✅");
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});
