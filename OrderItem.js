import React from 'react';

const OrderItem = ({ order, deleteOrder }) => {
  const handleDelete = () => {
    deleteOrder(order.id);
  };

  return (
    <div>
      <span>{order.name}</span>
      <span>{order.amount}</span>
      <button onClick={handleDelete}>Delete Order</button>
    </div>
  );
};

export default OrderItem;