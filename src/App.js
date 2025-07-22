import React, { useEffect, useState } from "react";
import { fetchGoals, addGoal, updateGoal, deleteGoal } from "./services/api";
import GoalCard from "./components/GoalCard";
import GoalForm from "./components/GoalForm";
import Overview from "./components/Overview";

const App = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAddGoal = async (goal) => {
    await addGoal(goal);
    fetchGoals().then(setGoals);
  };

  const handleDeleteGoal = async (id) => {
    await deleteGoal(id);
    fetchGoals().then(setGoals);
  };

  const handleDeposit = async (goal) => {
    const input = prompt("Enter amount to deposit:");
    const deposit = parseFloat(input);
    if (!isNaN(deposit) && deposit > 0) {
      const newAmount = goal.savedAmount + deposit;
      await updateGoal(goal.id, { savedAmount: newAmount });
      fetchGoals().then(setGoals);
    }
  };

  return (
    <div className="App">
      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <div className="goal-grid">
        {goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={handleDeleteGoal}
            onDeposit={handleDeposit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
