import { LoginRegisterPage } from '@/pages/LoginRegisterPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { Routes, Route, BrowserRouter } from 'react-router'
import './App.css'
import { ThemeProvider } from './components/theme/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/register" element={<LoginRegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
