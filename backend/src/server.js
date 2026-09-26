require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const contactRouter = require("./routes/contact");
const contentRouter = require("./routes/content");

const app = express();
const PORT = process.env.PORT || 4000;
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json({ limit: "20kb" }));

// Basic abuse protection on the public contact endpoint.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." },
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/contact", contactLimiter, contactRouter);
app.use("/api/content", contentRouter);

app.use((req, res) => res.status(404).json({ error: "Not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Unexpected server error" });
});

app.listen(PORT, () => {
  console.log(`OFM backend listening on http://localhost:${PORT}`);
});
