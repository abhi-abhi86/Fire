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
    return <div className="text-white">Loading messages...</div>
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Contact Messages</h2>
      {messages.length === 0 ? (
        <p className="text-gray-400">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`bg-gray-800 p-6 rounded-lg ${
                !message.isRead ? 'border-l-4 border-accent' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{message.name}</h3>
                  <p className="text-gray-400">{message.email}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {!message.isRead && (
                  <button
                    onClick={() => markAsRead(message._id)}
                    className="text-black btn bg-accent hover:bg-accent/80"
                  >
                    Mark as Read
                  </button>
                )}
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MessageViewer
