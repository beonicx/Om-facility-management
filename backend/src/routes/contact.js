const express = require("express");
const { appendSubmission } = require("../lib/store");
const { sendContactNotification } = require("../lib/mailer");

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  const { name, email, phone, site, message } = req.body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Please enter your name." });
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return res.status(400).json({ error: "Please describe what you need managed." });
  }

  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    site: typeof site === "string" ? site.trim() : "",
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  try {
    appendSubmission(submission);
  } catch (err) {
    console.error("Failed to persist submission:", err);
    return res.status(500).json({ error: "Could not save your message. Please try again." });
  }

  try {
    await sendContactNotification(submission);
  } catch (err) {
    // Don't fail the request just because the notification email failed —
    // the submission is already safely stored.
    console.error("Failed to send notification email:", err);
  }

  return res.status(201).json({ ok: true });
});

module.exports = router;
