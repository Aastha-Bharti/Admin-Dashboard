import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const SalesChart = () => {

    const chartColors = [
        'var(--chart-1)',
        'var(--chart-2)',
        'var(--chart-3)',
        'var(--chart-4)',
        'var(--chart-5)'
    ]

    const data = [
        { name : 'Electronics' , value : 45 },
        { name : 'Clothing' , value :  30 },
        { name : 'Books' , value :  15 },
        { name : 'Home & Kitchen' , value : 10 }
    ]

  return (
    <div className='backdrop-blur-xl rounded-b-2xl p-6 shadow-lg' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className='mb-4'>
            <h3 className='text-xl font-bold' style={{ color: 'var(--foreground)' }}>Sales by Category</h3>
            <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>Production Distribution</p>
        </div>

        <div className='h-42'>
            {/* Chart will go here */}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index]} />
                        ))}
                    </Pie>
                    <Tooltip 
                    contentStyle={{ 
                        backgroundColor: 'var(--card)', 
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                        color: 'var(--foreground)'
                    }}
                    itemStyle={{ color: 'var(--foreground)' }} />
                </PieChart>
            </ResponsiveContainer>
         </div>

          <div className='space-y-1'>
                {data.map((item, index) => (
                    <div key={index} className='flex items-center justify-between'>
                        <div className='space-x-2 flex items-center'>
                            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: chartColors[index] }}></div>
                            <span className='text-sm' style={{ color: 'var(--muted-foreground)' }}>{item.name}</span>
                        </div>

                        <div>
                            <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>{item.value}%</span>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default SalesChart