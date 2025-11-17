import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AdminDashboard from '../components/admin/AdminDashboard'

const AdminPanel = () => {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && (!user || !user.isAdmin)) {
      navigate('/admin')
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!user || !user.isAdmin) {
    return null
  }

  return <AdminDashboard />
}

export default AdminPanel
