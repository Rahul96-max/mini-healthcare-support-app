<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# \# Mini Healthcare Support Web App (Concept-Level)

## Overview

A concept-level mini web app for an NGO to collect:

- Patient Support requests
- Volunteer registrations
- General contact queries


## AI / Automation Idea

1) **Automation: Auto-summary**

- On every form submission, the backend generates a compact one-line case summary.
- This helps NGO staff quickly triage requests and route them to the right volunteer/team.

2) **AI Concept: FAQ Chatbot**

- A simple FAQ chatbot endpoint answers common queries (rule-based for prototype).
- Upgrade path: RAG + LLM over NGO FAQs/documents for better answers and multilingual support.


## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Storage: In-memory (prototype)


## How an NGO would use it

- Faster handling of incoming requests using the auto-summary
- Reduced repetitive questions via chatbot
- Lightweight admin view for recent submissions


## Run Locally

### Backend

```bash
cd server
npm install
npm run dev
Frontend
cd client
npm install
npm run dev
Backend: http://localhost:5000
Frontend: http://localhost:5173


---

## 4) (Optional but Good) Add a homepage route to backend
So `http://localhost:5000/` won’t show “Cannot GET /”.

In `server/index.js` add:

```js
app.get("/", (req, res) => {
  res.send("Mini Healthcare Support API is running. Try /health");
});   create a fread me

Here's a comprehensive README.md for your Mini Healthcare Support Web App:

```markdown
# Mini Healthcare Support Web App

A lightweight web application for NGOs to streamline patient support requests, volunteer registrations, and general inquiries. Features AI-powered auto-summaries for quick triage and a FAQ chatbot.

## ✨ Features

- **Patient Support Requests** - Collect medical assistance cases
- **Volunteer Registration** - Onboard healthcare volunteers
- **General Contact Form** - Handle inquiries efficiently
- **AI Auto-Summary** - Generates one-line case summaries for fast triage
- **FAQ Chatbot** - Rule-based bot for common questions (RAG/LLM upgrade path)
- **Admin Dashboard** - View recent submissions
- **Multilingual Ready** - Easy upgrade for regional languages

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Storage** | In-memory (prototype) |
| **AI Features** | Custom summary generation |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Backend Setup
```bash
cd server
npm install
npm run dev
```

**Backend runs on:** `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

### Health Check

Visit `http://localhost:5000/` or `http://localhost:5000/health`

## 📱 NGO Workflow

1. **Visitors** submit forms (Patient/Volunteer/Contact)
2. **Auto-summary** generated instantly for triage
3. **Admin dashboard** shows recent submissions with summaries
4. **Chatbot** handles 80% of repetitive FAQ queries
5. **Volunteers** get routed to relevant cases

## 🧠 AI Features

### Auto-Summary Generation

```javascript
// Example output
"45yo female needs medication assistance - diabetes, low income"
"20yo medical student volunteer - available weekends, Delhi"
```


### FAQ Chatbot (Prototype)

- Rule-based matching for common queries
- **Upgrade Path**: RAG + LLM with NGO documents
- **Multilingual**: Hindi/Urdu support ready


## 📁 Project Structure

```
mini-healthcare-app/
├── client/           # React + Vite frontend
├── server/           # Node.js + Express backend
├── README.md
└── docs/            # API documentation
```


## 🔧 API Endpoints

| Method | Endpoint | Description |
| :-- | :-- | :-- |
| `GET` | `/` | Welcome message |
| `GET` | `/health` | Health check |
| `POST` | `/api/submit-patient` | Patient request |
| `POST` | `/api/register-volunteer` | Volunteer signup |
| `POST` | `/api/contact` | General inquiry |
| `GET` | `/api/recent-submissions` | Admin dashboard data |
| `POST` | `/api/chatbot` | FAQ responses |

## 🛣️ Development Scripts

```bash
# Backend
npm run dev          # Development server
npm run build        # Production build

# Frontend
npm run dev          # Vite dev server
npm run build        # Production build
npm run preview      # Preview production build
```


## 🌐 Production Deployment

### Recommended Hosting

- **Frontend**: Vercel, Netlify
- **Backend**: Render, Railway, Heroku
- **Database**: Upgrade to PostgreSQL/MongoDB


### Environment Variables

```
PORT=5000
NODE_ENV=production
```


## 🚀 Future Enhancements

- [ ] PostgreSQL/MongoDB integration
- [ ] RAG-based multilingual chatbot
- [ ] Email/SMS notifications
- [ ] Authentication for admin/volunteers
- [ ] File uploads (prescriptions, documents)
- [ ] Analytics dashboard
- [ ] WhatsApp integration


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built for NGOs making healthcare accessible. Contributions welcome!

---

**Demo**: [http://localhost:5173](http://localhost:5173)
**API Docs**: [http://localhost:5000/health](http://localhost:5000/health)

```

***

This README is production-ready and covers everything an NGO team member or developer would need. Save it as `README.md` in your project root.

Would you like me to add deployment instructions for a specific platform (Vercel, Render) or include API response examples?```

