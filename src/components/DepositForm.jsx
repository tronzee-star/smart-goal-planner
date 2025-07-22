import React, { useState } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(goalId, parseFloat(amount));
    setAmount('');
    setGoalId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)}>
        <option value="">Select Goal</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
