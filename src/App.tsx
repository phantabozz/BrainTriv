import { LoginRegisterPage } from '@/pages/LoginRegisterPage'
import { Routes, Route, BrowserRouter } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/register" element={<LoginRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
