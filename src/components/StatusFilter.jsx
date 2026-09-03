const StatusFilter = ({ selectedStatus, onStatusChange }) => {
  return (
    <div className="mb-5">
      <label htmlFor="status" className="text-sm text-gray-600 mr-2">
        Filter by status:{" "}
      </label>
      <select
        id="status"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border border-rose-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-rose-400"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="fulfilled">Fulfilled</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default StatusFilter;
