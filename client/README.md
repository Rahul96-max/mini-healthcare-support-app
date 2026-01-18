# Mini Healthcare Support Web App (Concept-Level)

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
