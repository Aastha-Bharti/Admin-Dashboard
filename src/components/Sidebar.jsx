import { BarChart3, Calendar, ChevronDown, CreditCard, FileText, LayoutDashboard, MessagesSquare, Package, Settings, ShoppingBag, User, Zap } from 'lucide-react'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";

const menuItems = [
    {
        id: "dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        active: true,
        badge: "New"
    } ,
    {
        id: "analytics",
        icon: BarChart3,
        label: "Analytics",
        submenu: [
            { id: "overview", label: "Overview" },
            { id: "reports", label: "Reports" },    
            { id: "insights", label: "Insights" }
        ]
    },
    {
        id: "users",
        icon: User,
        label: "Users",
        count: "2.4k",
        submenu: [
            { id: "all-users", label: "All Users" },
            { id: "roles", label: "Roles & Permissions" },
            { id: "activity", label: "User Activity" }
        ]
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        label: "Ecommerce",
        submenu: [
            { id: "products", label: "Products" },
            { id: "orders", label: "Orders" },
            { id: "customers", label: "Customers" }
        ]
    },{
        id: "inventory",
        icon: Package,
        label: "Inventory",
        count: "847"
    },
    {
        id: "transactions",
        icon: CreditCard,
        label: "Transactions",
    },
    {
        id: "messages",
        icon: MessagesSquare,
        label: "Messages",
        badge: "12"
    },
    {
        id: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        id: "reports",
        icon: FileText,
        label: "Reports",
    },
    {
        id: "settings",
        icon: Settings,
        label: "Settings",
    }
]


const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
    
    const [expandedItems,setExpandedItems] = useState(new Set( ["analytics"]))

    const handleToggle = (itemId) => {
        const newExpandedItems = new Set(expandedItems)

        if (newExpandedItems.has(itemId)) {
            newExpandedItems.delete(itemId)
        } else {
            newExpandedItems.add(itemId)
        }
        setExpandedItems(newExpandedItems)
    }

    return (
    <div className={`${collapsed ? 'w-20' : 'w-72'} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}>
        {/* logo */}
        <div className='p-4 border-b border-slate-200/50 dark:border-slate-700/50 '>
            <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                    <Zap className='w-6 h-6 text-white'/>
                </div>

                {!collapsed && (
                    <div>
                        <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                        <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
                    </div>
                )}
                
            </div>
        </div>

        {/* navigation */}
        <nav className='flex-1 p-3 overflow-y-auto'>
            {menuItems.map((item) => {
                return(
                <div key={item.id}>
                    <button className={`w-full flex items-center justify-between p-2 rounded-xl transition-all duration-200
                        ${currentPage === item.id || item.active 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`} 
                        onClick={() => {
                            if(item.submenu){
                                handleToggle(item.id)
                            }else{
                                onPageChange(item.id)
                            }
                        }}>
                        <div className='flex items-center space-x-3'>
                            <item.icon className={`w-5 h-5 text-white`} />
                            
                            { !collapsed && (
                            <>
                                <span className='text-s font-light ml-2 text-slate-800 dark:text-white'>{item.label}</span>
                                { item.badge && (
                                <span className='px-2 py-1 text-xs bg-red-500 text-white rounded-full'>{item.badge}</span>
                            )}
                            { item.count && (
                                <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-blue-400 text-black dark:text-slate-200 rounded-full'>
                                {item.count}</span>
                            )}
                            </>
                            )}
                        

                        </div>
                        { !collapsed && item.submenu && <ChevronDown className='w-5 h-5 text-white transition-transform' />}
                    </button>
                    {/* sub-menus */}
                    { !collapsed && item.submenu && expandedItems.has(item.id) && (
                        <div className='ml-8 mt-2 space-y-1 text-black dark:text-slate-200 font-light text-s'>
                        {item.submenu.map( (subitem) => (
                            <button className='text-sm w-full text-left p-2 text-slate-200 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all '>{subitem.label}</button>
                        )) }
                    </div>
                )}
                </div>
                )
            })}
            
        </nav>

        {/* user profile */}
        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
            <div className='w-8 h-8 rounded-full ring-1 ring-blue-500 flex items-center justify-center'>
                <FaRegUser className='w-4 h-4 text-slate-700 dark:text-white'/>
            </div>
        
            <div className='flex-1 min-w-0'>
                <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-slate-800 dark:text-white truncate'> Pam Johnson</p>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar