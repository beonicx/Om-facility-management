const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, "[]", "utf8");
  }
}

function readSubmissions() {
  ensureStore();
  const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function appendSubmission(entry) {
  ensureStore();
  const submissions = readSubmissions();
  submissions.push(entry);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf8");
  return entry;
}

module.exports = { readSubmissions, appendSubmission };
