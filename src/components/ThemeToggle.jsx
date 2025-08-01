import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  // Load saved theme on first render
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = saved === 'dark' || (!saved && prefersDark)

    document.documentElement.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const willBeDark = !html.classList.contains('dark')

    html.classList.toggle('dark', willBeDark)
    localStorage.setItem('theme', willBeDark ? 'dark' : 'light')
    setIsDark(willBeDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle
