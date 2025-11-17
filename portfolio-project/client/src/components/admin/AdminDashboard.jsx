import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import ProjectForm from './ProjectForm'
import MessageViewer from './MessageViewer'

const AdminDashboard = () => {
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('projects')

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen text-white bg-gray-900">
      <header className="flex items-center justify-between px-6 py-4 bg-black">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 btn hover:bg-red-700"
        >
          Logout
        </button>
      </header>
      <div className="flex">
        <nav className="w-64 min-h-screen p-6 bg-gray-800">
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full text-left py-2 px-4 rounded ${
                activeTab === 'projects' ? 'bg-accent text-black' : 'hover:bg-gray-700'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full text-left py-2 px-4 rounded ${
                activeTab === 'messages' ? 'bg-accent text-black' : 'hover:bg-gray-700'
              }`}
            >
              Messages
            </button>
          </div>
        </nav>
        <main className="flex-1 p-6">
          {activeTab === 'projects' && <ProjectForm />}
          {activeTab === 'messages' && <MessageViewer />}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
