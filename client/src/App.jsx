import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminPanel from './pages/AdminPanel'
import GlobalLoader from './components/globals/GlobalLoader'
import CustomCursor from './components/globals/CustomCursor'
import Navbar from './components/globals/Navbar'
import Footer from './components/globals/Footer'
import useLenis from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <div className="min-h-screen text-white bg-black">
      <GlobalLoader />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/dashboard" element={<AdminPanel />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
