import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const SalesChart = () => {

    const data = [
        { name : 'Electronics' , value : 45 , color : '#3b82f6' },
        { name : 'Clothing' , value :  30, color : '#8b5cf6'},
        { name : 'Books' , value :  15, color : '#10b981' },
        { name : 'Home & Kitchen' , value : 10, color : '#f59e0b' }
    ]

  return (
    <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-lg'>
        <div className='mb-4'>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>Sales by Category</h3>
            <p className='text-sm text-slate-600 dark:text-slate-400'>Production Distribution</p>
        </div>

        <div className='h-48'>
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
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip 
                    contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                    }} />
                </PieChart>
            </ResponsiveContainer>

            {/* <div className='space-y-2 '>

            </div> */}
        </div>
    </div>
  )
}

export default SalesChart