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
                return { backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' };
            case 'Completed':
                return { backgroundColor: 'var(--chart-1)', color: 'var(--primary-foreground)' };
            case 'Cancelled':
                return { backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' };
            default:
                return { backgroundColor: 'var(--muted)', color: 'var(--muted-foreground)' };
        }
    }

  return (
    <div className='space-y-6'>
        {/* recent orders */}
        <div className='shadow p-6 backdrop-blur-lg overflow-hidden rounded-xl' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className='p-5' style={{ borderBottom: '1px solid var(--border)' }}>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-lg font-bold' style={{ color: 'var(--foreground)' }}>Recent Orders</h3>
                    <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>Latest Customer Orders</p>
                </div>
                <button className='text-sm font-medium hover:opacity-80 transition-opacity' style={{ color: 'var(--primary)' }}>View All</button>
            </div>
            </div>
            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Order ID
                            </th>
                            
                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Customer
                            </th>

                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Product
                            </th>
                            
                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Amount
                            </th>

                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Status
                            </th>

                            <th className='text-left text-sm font-semibold px-4 py-2' style={{ color: 'var(--muted-foreground)' }}>
                                Date
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map( (order,index) => {
                                return (
                                    <tr key={index} className='transition-colors hover:opacity-80' style={{ borderBottom: '1px solid var(--border)' }}>
                            <td className='p-4'>
                                <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>
                                    {order.id} 
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>
                                    {order.customer}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>
                                    {order.product}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>
                                    {order.amount} 
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-xs py-1 px-2 rounded-full' style={getStatusColor(order.status)}>
                                    {order.status}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>
                                    {order.date}
                                </span>
                            </td>

                            <td className='p-4'>
                                <span className='text-sm'>
                                    <MoreHorizontal className='w-4 h-4' style={{ color: 'var(--foreground)' }}/>
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
        <div className='backdrop-blur shadow-lg rounded-2xl overflow-hidden' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className='p-6' style={{ borderBottom: '1px solid var(--border)' }}>
                <div className='flex items-center justify-between'>
                    <div className='ml-5'>
                        <h3 className='text-lg font-bold' style={{ color: 'var(--foreground)' }}>
                            Top Products
                        </h3>
                    </div>
                    <div>
                        <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>
                            Best Performing Products
                        </p>
                    </div>
                </div>
                <button className='text-sm font-medium hover:opacity-80 transition-opacity ml-5' style={{ color: 'var(--primary)' }}>View All</button>

                {/* dynamic data */}
                <div className='p-6 space-y-4'>
                    {topProducts.map((product,index) => {
                        return <div key={index} className='flex items-center justify-around p-4 rounded-xl hover:opacity-80 transition-opacity'>
                    <div className='flex-1'>
                        <h4 className='text-sm font-semibold' style={{ color: 'var(--foreground)' }}>{product.name}</h4>
                        <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>Sales : {product.sales}</p>
                    </div>
                    <div className='text-right'> 
                        <p className='text-sm font-semibold' style={{ color: 'var(--foreground)' }}>{product.revenue}</p>
                        <div className='flex items-center space-x-1'>
                            {product.trend == "up" ? (
                                <TrendingUp className='w-3 h-3' style={{ color: 'var(--chart-1)' }}/> 
                            ) : (
                                <TrendingDown className='w-3 h-3' style={{ color: 'var(--destructive)' }}/>
                            )}
                            <span className='text-xs font-medium' style={{ color: product.trend === "up" ? "var(--chart-1)" : "var(--destructive)" }}>{product.change}</span> 
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