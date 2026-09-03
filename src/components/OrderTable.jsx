import React, { useState } from "react";
import { orders } from "../data/orders";
import { getTotalRevenue } from "../utils/orderCalculations";

const OrderTable = ({orders}) => {
  return (
    <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm shadow-rose-100">
      <thead className="bg-rose-100">
        <tr>
          <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-rose-500">
            Order ID
          </th>
          <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-rose-500">
            Customer
          </th>
          <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-rose-500">
            Items
          </th>
          <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-rose-500">
            Total
          </th>
          <th className="text-left px-5 py-3 text-xs uppercase tracking-wide text-rose-500">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className="hover:bg-rose-50 border-t border-rose-50"
          >
            <td className="px-5 py-3 text-sm">{order.id}</td>
            <td className="px-5 py-3 text-sm">{order.customer}</td>
            <td className="px-5 py-3 text-sm">{order.items.length}</td>
            <td className="px-5 py-3 text-sm">₹{getTotalRevenue(order)}</td>
            <td className="px-5 py-3 text-sm">
              <StatusBadge status={order.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
