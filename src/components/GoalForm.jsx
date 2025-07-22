import React, { useState } from "react";

const GoalForm = ({ onAddGoal }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    targetAmount: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      ...formData,
      id: crypto.randomUUID(),
      savedAmount: 0,
      targetAmount: parseFloat(formData.targetAmount),
      createdAt: new Date().toISOString().split("T")[0],
    };
    onAddGoal(newGoal);
    setFormData({ name: "", category: "", targetAmount: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Goal</h3>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
