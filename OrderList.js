import React, { useState } from 'react';
import OrderForm from './OrderForm';
import OrderItem from './OrderItem';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <h1>Order List</h1>
      <OrderForm addOrder={addOrder} />
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          order={order}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
};

export default OrderList;
