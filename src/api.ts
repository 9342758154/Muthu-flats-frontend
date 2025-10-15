const API_BASE = "http://127.0.0.1:8000";

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users/all`);
  return res.json();
}

export async function addUser(userData: { name: string; email: string; password: string }) {
  const res = await fetch(`${API_BASE}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}

fetch(`${API_BASE}/flats`)
  .then(res => res.json())
  .then(data => console.log(data))
