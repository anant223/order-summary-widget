const colors = {
  pending: "bg-amber-100 text-amber-700",
  fulfilled: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
