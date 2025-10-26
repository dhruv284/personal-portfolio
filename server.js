require("dotenv").config();
const express = require("express");
const cors = require("cors");
 // npm i node-fetch@2 for Node 18+

const app = express();
const router = express.Router();

app.use(cors({ origin: "*" })); // Replace "*" with your frontend domain in production
app.use(express.json());
app.use("/", router);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} with brevo`));

// Contact form endpoint using Brevo API
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  if (!email || !message || !firstName) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = `${firstName} ${lastName || ""}`;

  const payload = {
    sender: { name, email },
    to: [{ email: process.env.EMAIL_USER, name: "Portfolio Owner" }],
    subject: "Contact Form Submission - Portfolio",
    htmlContent: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Mail sent successfully ✅", result);
      res.status(200).json({ code: 200, status: "Message Sent" });
    } else {
      console.error("Mail send error:", result);
      res.status(500).json({ code: 500, status: "Error sending email" });
    }
  } catch (error) {
    console.error("Mail send error:", error);
    res.status(500).json({ code: 500, status: "Error sending email" });
  }
});