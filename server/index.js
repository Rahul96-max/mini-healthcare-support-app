import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage (concept level)
const submissions = [];

// Automation idea: auto-summary for triage
function generateAutoSummary(payload) {
  const { formType, name, phone, city, message, needs, availability } = payload;

  const parts = [
    `Type: ${formType || "N/A"}`,
    `Name: ${name || "N/A"}`,
    `Phone: ${phone || "N/A"}`,
    `City: ${city || "N/A"}`
  ];

  if (formType === "patient_support") {
    parts.push(`Needs: ${needs || "N/A"}`);
    parts.push(`Details: ${message || "N/A"}`);
  } else if (formType === "volunteer") {
    parts.push(`Availability: ${availability || "N/A"}`);
    parts.push(`Notes: ${message || "N/A"}`);
  } else {
    parts.push(`Message: ${message || "N/A"}`);
  }

  return parts.join(" | ");
}

// Chatbot concept: rule-based FAQ (upgradeable to LLM later)
const faq = [
  { q: "how can i volunteer", a: "Fill the Volunteer Registration form. Our team will contact you within 24–48 hours." },
  { q: "is this free", a: "Support services are typically free or low-cost depending on partner availability." },
  { q: "how do i request patient support", a: "Use the Patient Support form and describe the need clearly." },
  { q: "what information should i share", a: "Basic contact details and short description. Avoid sensitive medical records in this prototype." }
];

function answerFAQ(text) {
  const t = (text || "").toLowerCase().trim();
  const hit = faq.find(item => t.includes(item.q));
  return hit
    ? hit.a
    : "I can help with volunteering, patient support requests, and general contact. Try: 'How can I volunteer?'";
}

// Routes
app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/api/submit", (req, res) => {
  const payload = req.body || {};
  const createdAt = new Date().toISOString();
  const autoSummary = generateAutoSummary(payload);

  const record = {
    id: submissions.length + 1,
    createdAt,
    payload,
    autoSummary,
    status: "new"
  };

  submissions.push(record);
  res.json({ ok: true, record });
});

app.get("/api/submissions", (req, res) => {
  res.json({ ok: true, submissions });
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body || {};
  res.json({ ok: true, reply: answerFAQ(message) });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
