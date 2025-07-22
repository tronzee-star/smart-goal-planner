import React from 'react';

const GoalCard = ({ goal, onDelete, onDeposit }) => {
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100).toFixed(0);
  const remaining = goal.targetAmount - goal.savedAmount;
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
  const status = goal.savedAmount >= goal.targetAmount
    ? '✅ Complete'
    : daysLeft < 0
    ? '❌ Overdue'
    : daysLeft <= 30
    ? '⚠️ Warning'
    : '⏳ In Progress';

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <p>Remaining: ${remaining}</p>
      <p>Status: {status}</p>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}>{progress}%</div>
      </div>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={() => onDeposit(goal)}>Deposit</button>
    </div>
  );
};

export default GoalCard;
