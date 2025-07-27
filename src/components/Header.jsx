import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from "lucide-react"
import { FaRegUser } from "react-icons/fa6";

const Header = ({ sideBarCollapsed, onToggleSideBar }) => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* left section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={onToggleSideBar}>
            <Menu className="w-5 h-5"/>
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-200">Welcome back, Pam! </p>
          </div>
        </div>

        {/* center */}
        <div className="flex max-w-md mx-8 ">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search..." className="pl-10 w-full pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-blue-500 focus:border-transparent transition-all" />

            <button>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-600" />
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center space-x-3">
          <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-semibold">New</span>
          </button>

          {/* toggle */}
          <button className="p-1.5 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Sun className="w-5 h-5" />
          </button>

          {/* notification */}
        <button className="relative p-1.5 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </button>

        {/* settings */}
        <button className="relative p-1.5 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Settings className="w-5 h-5" />
        </button>

        {/* user profile */}
        <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700"> 
          <div className='w-10 h-10 rounded-full ring-1 ring-blue-500 flex items-center justify-center'>
                <FaRegUser className='w-5 h-5 text-slate-700 dark:text-white'/>
            </div>
          <div className="hidden md:block ">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-300">Pam Johnson</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
          </div>

          <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-200"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header