import ActivityFeed from './ActivityFeed.jsx'
import ChartSection from './ChartSection.jsx'
import StatsGrid from './StatsGrid.jsx'
import TableSection from './TableSection.jsx'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
      <StatsGrid />

      <ChartSection />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='xl:col-span-2'>
          <TableSection />
        </div>

        <div>
          <ActivityFeed />
        </div>
      
      </div>
    </div>
  )
}

export default Dashboard