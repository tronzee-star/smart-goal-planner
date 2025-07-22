import React, { useState } from 'react';

const GoalForm = ({ onAdd }) => {
  const [goal, setGoal] = useState({
    name: '',
    category: '',
    targetAmount: '',
    savedAmount: 0,
    deadline: '',
    createdAt: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(goal);
    setGoal({ ...goal, name: '', category: '', targetAmount: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={goal.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={goal.category} onChange={handleChange} />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={goal.targetAmount} onChange={handleChange} />
      <input name="deadline" type="date" value={goal.deadline} onChange={handleChange} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
