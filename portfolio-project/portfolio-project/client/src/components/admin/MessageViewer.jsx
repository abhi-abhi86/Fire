import { useEffect, useState } from 'react'
import api from '../../lib/api'

const MessageViewer = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await api.get('/messages')
      setMessages(response.data)
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id) => {
    try {
      await api.put(`/messages/${id}`)
      setMessages(messages.map(msg =>
        msg._id === id ? { ...msg, isRead: true } : msg
      ))
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  if (loading) {
    return <div className="py-8 text-center">Loading messages...</div>
  }

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {messages.map((message) => (
          <li key={message._id} className={`px-6 py-4 ${!message.isRead ? 'bg-blue-50' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{message.name}</p>
                  <p className="text-sm text-gray-500">{new Date(message.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="text-sm text-gray-600">{message.email}</p>
                <p className="mt-2 text-sm text-gray-700">{message.message}</p>
              </div>
              {!message.isRead && (
                <button
                  onClick={() => markAsRead(message._id)}
                  className="px-3 py-1 ml-4 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Mark as Read
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {messages.length === 0 && (
        <div className="py-8 text-center text-gray-500">No messages yet.</div>
      )}
    </div>
  )
}

export default MessageViewer
