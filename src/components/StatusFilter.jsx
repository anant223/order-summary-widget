const StatusFilter = ({ selectedStatus, onStatusChange }) => {
  return (
    <div className="status-filter">
      <label htmlFor="status">Filter by status: </label>
      <select id="status">
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="fulfilled">Fulfilled</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
};

export default StatusFilter;
