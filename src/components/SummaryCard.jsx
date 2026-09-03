import {
  getTotalRevenueFromFullFilled,
  getPendingOrders,
} from "../utils/orderCalculations";
const SummaryCard = () => {
  return (
    <div className="summary">
      <div className="summary-card">
        <div className="label">Fulfilled Revenue</div>
        <div className="value">₹{getTotalRevenueFromFullFilled()}</div>
      </div>
      <div className="summary-card">
        <div className="label">Pending Orders</div>
        <div className="value">{getPendingOrders()}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
