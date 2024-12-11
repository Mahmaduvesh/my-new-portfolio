require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email sending route
app.post("/send", async (req, res) => {
  const { email, name, subject, message } = req.body;

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure SMTP port
      secure: true, // SSL
      auth: {
        user: "uveshkhalifa7920@gmail.com", // Your Gmail address
        pass: "sljfoehvtjhwizvs", // Your app password
      },
      tls: {
        rejectUnauthorized: false, // Development only
      },
    });

    // Email details
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's info
      to: "uveshkhalifa7920@gmail.com", // Receiver (your email)
      subject: subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
