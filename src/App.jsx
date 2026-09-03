import "./index.css"
import StatusFilter from './components/StatusFilter'
import SummaryCard from './components/SummaryCard'
import OrderTable from './components/OrderTable'
import { useState } from 'react'
import { orders } from './data/orders'

function App() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredOrders = selectedStatus === "all" ? orders : 
  orders.filter((order) => order.status === selectedStatus)

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans">
      <h1 className="text-3xl font-semibold text-rose-400 mb-6">
        Order Summary
      </h1>
      <SummaryCard />
      <StatusFilter
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <OrderTable orders={filteredOrders} />
    </div>
  );
}

export default App
