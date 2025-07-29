import React from 'react'
import RevenueChart from './RevenueChart'
import SalesChart from './SalesChart'

const ChartSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='lg:col-span-2'>
        <RevenueChart />
      </div>
      <div>
        <SalesChart />
      </div>
    </div>
  )
}

export default ChartSection