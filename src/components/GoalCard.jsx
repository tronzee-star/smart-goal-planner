import React from "react";

const GoalCard = ({ goal, onDelete, onDeposit }) => {
  const { name, category, targetAmount, savedAmount, deadline } = goal;

  const progress = Math.min(100, (savedAmount / targetAmount) * 100).toFixed(0);
  const isComplete = savedAmount >= targetAmount;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));

  let status = "In Progress";
  if (isComplete) status = "✅ Complete";
  else if (daysLeft < 0) status = "❌ Overdue";
  else if (daysLeft <= 30) status = "⚠️ Deadline Soon";

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Target:</strong> ${targetAmount}</p>
      <p><strong>Saved:</strong> ${savedAmount}</p>
      <p><strong>Deadline:</strong> {deadline}</p>
      <p><strong>Status:</strong> {status}</p>
      <div style={{ background: "#eee", height: "10px", borderRadius: "5px", marginBottom: "8px" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
            borderRadius: "5px",
          }}
        />
      </div>
      <button onClick={() => onDeposit(goal)}>Deposit</button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
};

export default GoalCard;
