const API_URL = "http://localhost:3000/goals";

export const fetchGoals = () => fetch(API_URL).then(res => res.json());

export const addGoal = (goal) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });

export const updateGoal = (id, updates) =>
  fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

export const deleteGoal = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE" });
