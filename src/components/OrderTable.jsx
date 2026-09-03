import React from "react";
import { orders } from "../data/orders";
import { getTotalRevenue } from "../utils/orderCalculations";

const OrderTable = () => {
    
  return (
    <div>
      <h1>Order Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items.length}</td>
              <td>₹{getTotalRevenue(order)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
