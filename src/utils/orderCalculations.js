import { orders } from "../data/orders"

const getOrderStatus = (status) => {
    return orders.filter((order) => (order.status === status));
}

const getPendingOrders = () => {
    return getOrderStatus("pending").length;
}

const getTotalRevenue = (order) => {
    return order.items.reduce(
      (sum, item) => sum + item.qty * item.price,
      0,
    );
}

const getTotalRevenueFromFullFilled = () => {
  const fullFilledOrdars = getOrderStatus("fulfilled");

  return fullFilledOrdars.reduce((sum, item) => sum + getTotalRevenue(item), 0);
};
export {
    getPendingOrders,
    getTotalRevenue,
    getTotalRevenueFromFullFilled
}