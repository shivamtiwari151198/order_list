import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    const order = { id: Date.now(), name, amount: parseFloat(amount) };
    addOrder(order);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      /><br/><br/>
      <button type="submit">Add Order</button><br/><br/>
    </form>
  );
};

export default OrderForm;
