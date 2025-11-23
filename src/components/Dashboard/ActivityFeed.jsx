import { Bell, Clock, CreditCard, Settings, ShoppingCart, User } from 'lucide-react'

const activities = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New User Registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "var(--chart-1)",
        bgColor: "var(--secondary)",
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #3847 for $2,399",
        time: "5 minutes ago",
        color: "var(--chart-2)",
        bgColor: "var(--secondary)",
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "Payment processed",
        description: "Payment of $1,299 completed",
        time: "12 minutes ago",
        color: "var(--chart-3)",
        bgColor: "var(--secondary)",
    },
    
    {
        id: 4,
        type: "system",
        icon: Settings,
        title: "New User Registered",
        description: "Database backup completed",
        time: "1 hour ago",
        color: "var(--chart-4)",
        bgColor: "var(--secondary)",
    },
    {
        id: 5,
        type: "notification",
        icon: Bell,
        title: "Low Stock Alert",
        description: "iPhone 15 Pro stock is low",
        time: "2 hours ago",
        color: "var(--destructive)",
        bgColor: "var(--secondary)",
    },

]

const ActivityFeed = () => {
  return (
    <div className='backdrop-blur-xl shadow-lg rounded-b-2xl' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className='p-6' style={{ borderBottom: '1px solid var(--border)' }}>
            <div>
                <h3 className='text-lg font-black' style={{ color: 'var(--foreground)' }}>ActivityFeed</h3>
                <p className='text-sm' style={{ color: 'var(--muted-foreground)' }}>Recent System Activities </p>
            </div>
            <button className='text-sm font-medium hover:opacity-80 transition-opacity' style={{ color: 'var(--primary)' }}>View All</button>
        </div>
        <div className='p-6'>
            <div className='space-y-4'>
                {activities.map((activity) => {
                    return <div key={activity.id} className='flex items-start p-3 space-x-4 rounded-xl hover:opacity-80 transition-opacity' style={{ backgroundColor: 'transparent' }}>
                <div className='p-2 rounded-lg' style={{ backgroundColor: activity.bgColor }}>
                    <activity.icon className='w-4 h-4' style={{ color: activity.color }} />
                </div>
                <div className='flex-1 min-w-0'>
                    <h4 className='text-sm font-semibold' style={{ color: 'var(--foreground)' }}>{activity.title}</h4>
                    <p className='text-sm truncate' style={{ color: 'var(--muted-foreground)' }}>{activity.description}</p>
                    <div className='flex items-center space-x-1 mt-1'>
                        <Clock className='w-3 h-3' style={{ color: 'var(--muted-foreground)' }}/>
                        <span className='text-xs' style={{ color: 'var(--muted-foreground)' }}>{activity.time}</span>
                    </div>
                </div>
                </div>
                })}
            </div>

        </div>
    </div>
  )
}

export default ActivityFeed