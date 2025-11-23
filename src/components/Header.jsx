import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings } from "lucide-react"
import { FaRegUser } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const Header = ({ sideBarCollapsed, onToggleSideBar }) => {
  return (
    <div className="backdrop-blur-xl px-4 sm:px-6 py-3" style={{ backgroundColor: 'var(--card)', borderBottom: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between">
        {/* left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--foreground)' }}
          onClick={onToggleSideBar}>
            <Menu className="w-5 h-5"/>
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>Dashboard</h1>
            <p style={{ color: 'var(--muted-foreground)' }}>Welcome back, Pam! </p>
          </div>
        </div>

        {/* center */}
        <div className="hidden lg:flex max-w-md mx-8 ">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--muted-foreground)' }} />
            <input type="text" placeholder="Search..." className="pl-10 w-full pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all" style={{ backgroundColor: 'var(--input)', color: 'var(--foreground)', border: '1px solid var(--border)' }} />

            <button>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1" style={{ color: 'var(--muted-foreground)' }} />
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center space-x-3">
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 rounded-xl hover:shadow-lg transition-all" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
            <Plus className="w-4 h-4" />
            <span className="text-sm font-semibold">New</span>
          </button>

          {/* toggle */}
          <button className="p-1.5 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--foreground)' }}>
            <ThemeToggle />
          </button>

          {/* notification */}
        <button className="relative p-1.5 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--foreground)' }}>
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 right-0 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center" style={{ backgroundColor: 'var(--destructive)' }}>3</span>
        </button>

        {/* settings */}
        <button className="relative p-1.5 rounded-lg transition-colors hover:opacity-80" style={{ color: 'var(--foreground)' }}>
          <Settings className="w-5 h-5" />
        </button>

        {/* user profile */}
        <div className="flex items-center space-x-3 pl-3" style={{ borderLeft: '1px solid var(--border)' }}> 
          <div className='w-10 h-10 rounded-full flex items-center justify-center' style={{ border: '1px solid var(--border)' }}>
                <FaRegUser className='w-5 h-5' style={{ color: 'var(--foreground)' }}/>
            </div>
          <div className="hidden md:block ">
            <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Pam Johnson</p>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Administrator</p>
          </div>

          <ChevronDown className="w-5 h-5" style={{ color: 'var(--foreground)' }}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header