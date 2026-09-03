import {
  getTotalRevenueFromFullFilled,
  getPendingOrders,
} from "../utils/orderCalculations";
const SummaryCard = () => {
  return (
    <div className="flex gap-4 mb-7">
      <div className="flex-1 bg-white rounded-2xl px-6 py-4 shadow-sm shadow-rose-100">
        <div className="text-xs uppercase tracking-wide text-rose-300 mb-1">
          Fulfilled Revenue
        </div>
        <div className="text-2xl font-bold text-rose-400">
          ₹{getTotalRevenueFromFullFilled()}
        </div>
      </div>
      <div className="flex-1 bg-white rounded-2xl px-6 py-4 shadow-sm shadow-rose-100">
        <div className="text-xs uppercase tracking-wide text-rose-300 mb-1">
          Pending Orders
        </div>
        <div className="text-2xl font-bold text-rose-400">
          {getPendingOrders()}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
