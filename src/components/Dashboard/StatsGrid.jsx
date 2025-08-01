import {  ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const StatsGrid = () => {

  const stats = [
    
    { 
      title: 'Total Revenue', 
      value: '$124,563', 
      change: '+12.5%' ,
      trend : 'up',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      textColor : 'text-emerald-600 dark:text-emerald-400',
    },
    { 
      title: 'Active Users', 
      value: '8549', 
      change: '8.2%' ,
      trend : 'up',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor : 'text-blue-600 dark:text-blue-400',
    },
    { 
      title: 'Total Orders', 
      value: '2895', 
      change: '+10.3%' ,
      trend : 'up',
      icon: ShoppingCart,  
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',    
      textColor : 'text-purple-600 dark:text-purple-400',
    },
    { 
      title: 'Page Views', 
      value: '42,345', 
      change: '-2.1%' ,
      trend : 'down',
      icon:   Eye,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      textColor : 'text-orange-600 dark:text-orange-400',
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map( (stats,index) => {
        return <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-500/20 dark:border-slate-700/50 hover:shadow-lg shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-slate-500/20 transition-all duration-300 group key={index}>'>
      <div className='flex items-start justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>{stats.title}</p>
          <p className='text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2'>{stats.value}</p>
          <div className='flex items-center space-x-2'>
            {stats.trend === 'up' ? 
            <ArrowUpRight className='w-4 h-4 text-emerald-500'/> :
            <ArrowDownRight className='w-4 h-4 text-red-500'/>}
            <span className={`text-sm font-medium ${stats.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>{stats.change}</span>
            <span className='text-sm font-normal text-slate-500 dark:text-slate-400'>vs last month</span>
            </div>
        </div>
        <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${stats.bgColor}`}>
              {<stats.icon className={`w-6 h-6 ${stats.textColor} `} />  }
        </div>
      </div>
      {/* Progress Bar */}
      <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden '>
        <div className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ease-in-out ${stats.color}`}
          style={{ width: stats.trend === 'up' ? '75%' : '45%' }}>
        </div>
      </div>

      </div>
      })}

    </div>
  )
}

export default StatsGrid