import { Bar, CartesianGrid, BarChart as ReBarChart, ResponsiveContainer ,Tooltip,XAxis, YAxis} from 'recharts'

const RevenueChart = () => { 

    const data = [
        { month : "Jan" , Revenue : 45000, Expenses: 32000 },
        { month : "Feb" , Revenue : 52000, Expenses: 38000 },
        { month : "Mar" , Revenue : 48000, Expenses: 35000 },
        { month : "Apr" , Revenue : 61000, Expenses: 42000 },
        { month : "May" , Revenue : 55000, Expenses: 40000 },
        { month : "Jun" , Revenue : 67000, Expenses: 45000 },        
        { month : "Jul" , Revenue : 72000, Expenses: 48000 },
        { month : "Aug" , Revenue : 69000, Expenses: 46000 },
        { month : "Sep" , Revenue : 78000, Expenses: 52000 },
        { month : "Oct" , Revenue : 74000, Expenses: 50000 },
        { month : "Nov" , Revenue : 82000, Expenses: 55000 },
        { month : "Dec" , Revenue : 89000, Expenses: 58000 }
    ]


  return (
    <div className='backdrop-blur-xl rounded-xl p-6 shadow-lg' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className='flex items-center justify-between mb-6'>
            <div>
                <h3 className='text-xl font-bold' style={{ color: 'var(--foreground)' }}>Revenue Chart</h3>
                <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>Monthly Revenue and Expenses</p>
            </div>
            <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 rounded-full' style={{ backgroundColor: 'var(--chart-1)' }}></div>
                    <div className='text-sm' style={{ color: 'var(--muted-foreground)' }}>
                        <span>Revenue </span>
                    </div>
                </div>

                <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 rounded-full' style={{ backgroundColor: 'var(--chart-2)' }}></div>
                    <div className='text-sm' style={{ color: 'var(--muted-foreground)' }}>
                        <span>Expenses </span>
                    </div>
                </div>

            </div>
        </div>

        <div className='h-72'>
            <ResponsiveContainer width='100%' height='100%'>
                <ReBarChart 
                data={data} 
                margin = {{ top: 20, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid 
                    strokeDasharray="3 3" 
                    style={{ stroke: 'var(--border)' }}
                    opacity={0.2} />

                    <XAxis 
                    dataKey="month"
                    style={{ fill: 'var(--muted-foreground)' }}
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} />

                    <YAxis 
                    style={{ fill: 'var(--muted-foreground)' }}
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}/>

                    <Tooltip 
                    contentStyle={{ 
                        backgroundColor: 'var(--card)', 
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                        color: 'var(--foreground)'}}
                        itemStyle={{ color: 'var(--foreground)' }}

                        formatter={(value,name) => [`$${value.toLocaleString()}`, name]}
                    />
                    <Bar 
                    dataKey="Revenue" 
                    fill="url(#revenueGradient)" 
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                    />

                    <Bar 
                    dataKey="Expenses" 
                    fill="url(#expensesGradient)" 
                    radius={[4, 4, 0, 0]}
                    maxBarSize={30}
                    />

                    <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" style={{ stopColor: 'var(--chart-1)' }} />
                            <stop offset="100%" style={{ stopColor: 'var(--primary)' }} />
                        </linearGradient>
                        <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" style={{ stopColor: 'var(--chart-2)' }} />
                            <stop offset="100%" style={{ stopColor: 'var(--muted-foreground)' }} />
                        </linearGradient>
                    </defs>
                </ReBarChart>
            </ResponsiveContainer>
            

        </div>
    </div>
  )
}

export default RevenueChart