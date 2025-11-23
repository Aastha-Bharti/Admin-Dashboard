import {  ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const StatsGrid = () => {

  const chartColors = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)']

  const stats = [
    
    { 
      title: 'Total Revenue', 
      value: '$124,563', 
      change: '+12.5%' ,
      trend : 'up',
      icon: DollarSign,
      chartColor: chartColors[0],
    },
    { 
      title: 'Active Users', 
      value: '8549', 
      change: '8.2%' ,
      trend : 'up',
      icon: Users,
      chartColor: chartColors[1],
    },
    { 
      title: 'Total Orders', 
      value: '2895', 
      change: '+10.3%' ,
      trend : 'up',
      icon: ShoppingCart,
      chartColor: chartColors[2],
    },
    { 
      title: 'Page Views', 
      value: '42,345', 
      change: '-2.1%' ,
      trend : 'down',
      icon:   Eye,
      chartColor: chartColors[3],
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map( (stat,index) => {
        return <div key={index} className='backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
      <div className='flex items-start justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium' style={{ color: 'var(--muted-foreground)' }}>{stat.title}</p>
          <p className='text-3xl font-bold mb-2' style={{ color: 'var(--foreground)' }}>{stat.value}</p>
          <div className='flex items-center space-x-2'>
            {stat.trend === 'up' ? 
            <ArrowUpRight className='w-4 h-4' style={{ color: 'var(--chart-1)' }}/> :
            <ArrowDownRight className='w-4 h-4' style={{ color: 'var(--destructive)' }}/>}
            <span className='text-sm font-medium' style={{ color: stat.trend === 'up' ? 'var(--chart-1)' : 'var(--destructive)' }}>{stat.change}</span>
            <span className='text-sm font-normal' style={{ color: 'var(--muted-foreground)' }}>vs last month</span>
            </div>
        </div>
        <div className='p-3 rounded-xl group-hover:scale-110 transition-all duration-300' style={{ backgroundColor: 'var(--secondary)' }}>
              <stat.icon className='w-6 h-6' style={{ color: stat.chartColor }} />
        </div>
      </div>
      {/* Progress Bar */}
      <div className='mt-4 h-2 rounded-full overflow-hidden' style={{ backgroundColor: 'var(--muted)' }}>
        <div className='h-full rounded-full transition-all duration-100 ease-in-out'
          style={{ width: stat.trend === 'up' ? '75%' : '45%', backgroundColor: stat.chartColor }}>
        </div>
      </div>

      </div>
      })}

    </div>
  )
}

export default StatsGrid