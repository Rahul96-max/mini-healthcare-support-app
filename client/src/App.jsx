import React, { useEffect, useState } from "react";
import { submitForm, fetchSubmissions, chat } from "./api.js";
import "./styles.css";

const initialState = {
  formType: "patient_support",
  name: "",
  phone: "",
  city: "",
  needs: "",
  availability: "",
  message: ""
};

export default function App() {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [chatMsg, setChatMsg] = useState("");
  const [chatReply, setChatReply] = useState("");

  async function refresh() {
    const data = await fetchSubmissions();
    if (data.ok) setSubmissions(data.submissions);
  }

  useEffect(() => { refresh(); }, []);

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await submitForm(form);
      setResult(res);
      await refresh();
      setForm(initialState);
    } finally {
      setLoading(false);
    }
  }

  async function onChat(e) {
    e.preventDefault();
    setChatReply("");
    const res = await chat(chatMsg);
    if (res.ok) setChatReply(res.reply);
  }

  const isPatient = form.formType === "patient_support";
  const isVolunteer = form.formType === "volunteer";

  return (
    <div className="container">
      <div className="card">
        <h2>Mini Healthcare Support Web App (Concept)</h2>
        <p className="small">
          NGO prototype: form intake + automation (auto-summary) + FAQ chatbot concept.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Form</h3>
          <form onSubmit={onSubmit}>
            <label>Form Type</label>
            <select name="formType" value={form.formType} onChange={onChange}>
              <option value="patient_support">Patient Support</option>
              <option value="volunteer">Volunteer Registration</option>
              <option value="contact">Contact</option>
            </select>

            <label>Name</label>
            <input name="name" value={form.name} onChange={onChange} placeholder="Full name" required />

            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" required />

            <label>City</label>
            <input name="city" value={form.city} onChange={onChange} placeholder="City" />

            {isPatient && (
              <>
                <label>Support Needed</label>
                <input name="needs" value={form.needs} onChange={onChange} placeholder="e.g., appointment, medicines, counseling" />
              </>
            )}

            {isVolunteer && (
              <>
                <label>Availability</label>
                <input name="availability" value={form.availability} onChange={onChange} placeholder="e.g., weekends, 2 hrs/day" />
              </>
            )}

            <label>Message</label>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Short details (avoid sensitive medical records in prototype)" />

            <div className="row" style={{ marginTop: 12 }}>
              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {result?.ok && (
            <>
              <hr />
              <h4>Auto-summary (automation)</h4>
              <pre>{result.record.autoSummary}</pre>
            </>
          )}
        </div>

        <div className="card">
          <h3>FAQ Chatbot (Concept)</h3>
          <form className="chatBox" onSubmit={onChat}>
            <input
              value={chatMsg}
              onChange={(e) => setChatMsg(e.target.value)}
              placeholder="Ask: how can i volunteer"
            />
            <button type="submit">Ask</button>
          </form>

          {chatReply && (
            <>
              <hr />
              <pre>{chatReply}</pre>
            </>
          )}

          <hr />
          <h3>Admin View (Latest 5)</h3>
          <div style={{ display: "grid", gap: 10 }}>
            {submissions.slice().reverse().slice(0, 5).map((s) => (
              <div key={s.id} style={{ border: "1px solid #eee", borderRadius: 10, padding: 10 }}>
                <div className="small"><b>#{s.id}</b> — {new Date(s.createdAt).toLocaleString()}</div>
                <div className="small" style={{ marginTop: 6 }}>
                  <b>Summary:</b> {s.autoSummary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
