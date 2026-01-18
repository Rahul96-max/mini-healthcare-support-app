const BASE_URL = "http://localhost:5000";

export async function submitForm(data) {
  const res = await fetch(`${BASE_URL}/api/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function fetchSubmissions() {
  const res = await fetch(`${BASE_URL}/api/submissions`);
  return res.json();
}

export async function chat(message) {
  const res = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  return res.json();
}
