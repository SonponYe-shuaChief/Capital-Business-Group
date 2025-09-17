// server/routes/contact.js
import express from "express";
import { Resend } from "resend";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, phone, vehicle, message } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.EMAIL_FROM || "noreply@capitalbusinessgroup.com", // safer, configurable
      to: process.env.EMAIL_TO || "capitalbusinessgroup@outlook.com",
      subject: `📩 New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Vehicle:</b> ${vehicle || "-"}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    res.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("❌ Email send failed:", err);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

export default router;
