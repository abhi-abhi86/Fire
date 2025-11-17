import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminLoginPage = () => {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard')
    }
  }, [user, isLoading, navigate])

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google'
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Admin Login</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default AdminLoginPage
