import { useState } from 'react'
import api from '../../lib/api'
import AnimatedInput from '../ui/AnimatedInput'
import MagneticButton from '../ui/MagneticButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await api.post('/messages', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center md:text-6xl">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : submitStatus === 'error' ? 'Error' : 'Send Message'}
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
