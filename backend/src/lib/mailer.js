const nodemailer = require("nodemailer");

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO_EMAIL = "omgroup4@gmail.com",
} = process.env;

const isConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

/**
 * Sends a notification email for a new contact submission.
 * If SMTP env vars are not configured, this silently no-ops so the
 * API still works in local/dev environments without email set up.
 */
async function sendContactNotification(submission) {
  if (!transporter) return { sent: false, reason: "SMTP not configured" };

  const { name, email, phone, site, message } = submission;

  await transporter.sendMail({
    from: `"OFM Website" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name} — Om Facility Management website`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Site / property: ${site || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  return { sent: true };
}

module.exports = { sendContactNotification, isConfigured };
