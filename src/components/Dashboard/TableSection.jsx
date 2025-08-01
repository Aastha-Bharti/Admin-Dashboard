import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'

const recentOrders = [
    {
        id: "#3857",
        customer : "John Smith",
        product: "Wireless Headphones",
        amount: "$89.99",
        status: "Pending",
        date: "2023-10-01"
    },
    {
        id: "#3858",
        customer : "Sarah Doe",
        product: "Bluetooth Speaker",
        amount: "$49.99",
        status: "Completed",
        date: "2023-10-02"
    },
    {
        id: "#3859",
        customer : "Alice Johnson",
        product: "Smartwatch",
        amount: "$199.99",
        status: "Pending",
        date: "2023-10-03"
    },
    {
        id: "#3860",
        customer : "Bob Brown", 
        product: "Gaming Mouse",
        amount: "$59.99",   
        status: "Cancelled",
        date: "2023-10-04"        
    }
]

const topProducts =[
    
    {
        name: 'MacBook Pro 16"' ,
        sales : 1247,
        revenue: "$2,987,530",
        trend: "up",
        change: "+12%",
    },
    {
        name: 'iPhone 15 Pro' ,
        sales : 2157,
        revenue: "$2,587,844",
        trend: "up",
        change: "+8%",
    },
    {
        name: 'AirPods Pro' ,
        sales : 3421,
        revenue: "$852,229",
        trend: "down",
        change: "-3%",
    },
    {
        name: 'iPad Air' ,
        sales : 987,
        revenue: "$591,213",
        trend: "up",
        change: "+15%",
    },

]

const TableSection = () => {

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'Completed':
                return 'bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-emerald-400';
            case 'Cancelled':
                return 'bg-red-300 text-red-500 dark:bg-red-900/30 dark:text-red-400';
            default:
                return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
        }
    }

  return (
    <div className='space-y-6'>
        {/* recent orders */}
        <div className='bg-white/80 dark:bg-gray-900/80 shadow rounded-lg p-6 backdrop-blur-lg overflow-hidden border border-slate-500/20 dark:border-slate-700/50 rounded-b-2xl'>
        <div className='p-5 border-b border-slate-500/20 dark:border-slate-700/50'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>Latest Customer Orders</p>
                </div>
                <button className='text-sm font-medium text-blue-600 hover:text-blue-700'>View All</button>
            </div>
            </div>
            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Order ID
                            </th>
                            
                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Customer
                            </th>

                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Product
                            </th>
                            
                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Amount
                            </th>

                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Status
                            </th>

                            <th className='text-left text-sm font-semibold text-slate-600 dark:text-slate-400 px-4 py-2'>
                                Date
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map( (order,key) => {
                                return (
                                    <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors'>
                            <td className='p-4 key={index}'>
                                <span className='text-sm font-medium text-slate-800 dark:text-white'>
                                    {order.id} 
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium text-slate-800 dark:text-white'>
                                    {order.customer}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium text-slate-800 dark:text-white'>
                                    {order.product}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium text-slate-800 dark:text-white'>
                                    {order.amount} 
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className={` text-xs py-1 px-2 rounded-full 
                                    ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium text-slate-800 dark:text-white'>
                                    {order.date}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className={`text-slate-800 dark:text-white text-sm `}>
                                    <MoreHorizontal className='w-4 h-4'/>
                                </span>
                            </td>
                            </tr>
                                )
                            })}
                        </tbody>
                 </table>
            </div>

        </div>

        {/* Top Products */}
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div className='flex items-center justify-between'>
                    <div className='text-lg font-bold text-slate-800 dark:text-white ml-5'>
                        <h3 className='text-lg font-bold text-slate-800 dark:text-white '>
                            Top Products
                        </h3>
                    </div>
                    <div>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            Best Performing Products
                        </p>
                    </div>
                </div>
                <button className='text-sm font-medium text-blue-600 hover:text-blue-700 ml-5'>View All</button>

                {/* dynamic data */}
                <div className='p-6 space-y-4'>
                    {topProducts.map((product,index) => {
                        return <div className='flex items-center justify-around p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                    <div className='flex-1'>
                        <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>{product.name}</h4>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>Sales : {product.sales}</p>
                    </div>
                    <div className='text-right'> 
                        <p className='text-sm font-semibold text-slate-800 dark:text-white'>{product.revenue}</p>
                        <div className='flex items-center space-x-1'>
                            {product.trend == "up" ?  (
                                <TrendingUp className='w-3 h-3 text-emerald-500'/> 
                            ) : (
                                <TrendingDown className='w-3 h-3 text-red-500'/>
                            )}
                            <span className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{product.change}</span> 
                        </div>
                    </div>
                </div>
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}

export default TableSection