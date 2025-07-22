import React, { useEffect, useState } from 'react';
import { fetchGoals, addGoal, updateGoal, deleteGoal } from './services/api';
import GoalCard from './components/GoalCard';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAdd = async (goal) => {
    await addGoal(goal);
    fetchGoals().then(setGoals);
  };

  const handleDelete = async (id) => {
    await deleteGoal(id);
    fetchGoals().then(setGoals);
  };

  const handleDeposit = async (goalId, amount) => {
    const goal = goals.find(g => g.id === goalId);
    const newAmount = goal.savedAmount + amount;
    await updateGoal(goalId, { savedAmount: newAmount });
    fetchGoals().then(setGoals);
  };

  return (
    <div className="App">
      <h1>SMART Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAdd={handleAdd} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <div className="goal-list">
        {goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onDelete={handleDelete}
            onDeposit={() => handleDeposit(goal.id, prompt("Enter deposit amount:"))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
