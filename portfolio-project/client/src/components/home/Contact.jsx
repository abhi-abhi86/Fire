import { useState } from 'react'
import api from '../../lib/api'
import AnimatedInput from '../ui/AnimatedInput'
import MagneticButton from '../ui/MagneticButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      await api.post('/messages', formData)
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 text-white bg-black">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-6xl">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedInput
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <AnimatedInput
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <AnimatedInput
            type="textarea"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="text-center">
            <MagneticButton
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 font-semibold text-black transition-colors bg-white rounded-full hover:bg-gray-200"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </MagneticButton>
          </div>
          {status && (
            <p className={`text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
