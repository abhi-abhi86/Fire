import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import MessageViewer from './MessageViewer'
import ProjectForm from './ProjectForm'

const AdminDashboard = () => {
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('projects')

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'projects'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Messages
            </button>
          </div>
        </div>
      </nav>

      <main className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {activeTab === 'projects' && <ProjectForm />}
        {activeTab === 'messages' && <MessageViewer />}
      </main>
    </div>
  )
}

export default AdminDashboard
