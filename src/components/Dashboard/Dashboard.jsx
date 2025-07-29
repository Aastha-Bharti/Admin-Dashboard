import ChartSection from './ChartSection.jsx'
import StatsGrid from './StatsGrid.jsx'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
      <StatsGrid />

      <ChartSection />
    </div>
  )
}

export default Dashboard