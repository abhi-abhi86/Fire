import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminLoginPage = () => {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && user && user.isAdmin) {
      navigate('/dashboard')
    }
  }, [user, isLoading, navigate])

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google'
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="mb-8 text-4xl font-bold text-white">Admin Login</h1>
        <button
          onClick={handleGoogleLogin}
          className="btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default AdminLoginPage
