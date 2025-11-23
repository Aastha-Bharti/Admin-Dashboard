import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar  from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Transactions from './components/Dashboard/Transactions.jsx';
import Messages from './components/Dashboard/Messages.jsx';


const App = () => {

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  return (
    <div className='min-h-screen transition-all duration-500' style={{ backgroundColor: 'var(--background)' }}>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar 
          collapsed={sideBarCollapsed} onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage} 
          onPageChange={setCurrentPage} />
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header sideBarCollapsed={sideBarCollapsed} onToggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)} />
              <main className='flex-1 bg-transparent overflow-y-auto'>
                <div className='p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6'>
                  {currentPage === "dashboard" && (
                    <Dashboard />
                  )}

                  {currentPage === 'transactions' && <Transactions />}
                   {currentPage === "messages" && <Messages />}

                </div>
              </main>
          </div>
        </div>
        
    </div>
  )
}

export default App



