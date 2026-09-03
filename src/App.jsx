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
    <>
      <h1>Order Summary</h1>
      <SummaryCard />
      <StatusFilter 
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <OrderTable orders={filteredOrders}/>
    </>
  )
}

export default App
