import express from "express";
import { Resend } from "resend";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, vehicle, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "noreply@capitalbusinessgroup.com",
      to: "capitalbusinessgroup@outlook.com",
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || "-"}</p><p><b>Vehicle:</b> ${vehicle || "-"}</p><p><b>Message:</b> ${message}</p>`
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default router;
