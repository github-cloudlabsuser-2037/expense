import React, { useState } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { id: expenses.length, name, amount }]);
    setName('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

  return (
    <div>
      <form onSubmit={addExpense}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense Name" />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button type="submit">Add Expense</button>
      </form>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <span>{expense.name}: ${expense.amount}</span>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
      <div>Total Expense: ${totalExpense}</div>
    </div>
  );
}

export default ExpenseTracker;