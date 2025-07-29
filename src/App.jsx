import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar  from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

const App = () => {

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50  dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 '>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar 
          collapsed={sideBarCollapsed} onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage} 
          onPageChange={setCurrentPage} />
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header sideBarCollapsed={sideBarCollapsed} onToggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)} />
              <main className='flex-1 bg-transparent overflow-y-auto'>
                <div className='p-4 space-y-6'>
                  {currentPage === "dashboard" && (
                    <Dashboard />
                  )}

                </div>
              </main>
          </div>
        </div>
        
    </div>
  )
}

export default App



