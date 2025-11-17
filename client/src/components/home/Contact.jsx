import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setStatus('Message sent successfully!')
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setStatus('')
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 pl-64 text-white bg-black">
      <div className="grid-brutalist">
        <div className="grid-item-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 text-4xl font-bold border-4 md:text-6xl text-display border-accent"
          >
            CONTACT
          </motion.h2>
        </div>
        <div className="grid-item-2">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 space-y-8 border-4 border-accent"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-mono text-white bg-black border-3 border-accent focus:outline-none focus:glow-accent"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 font-mono text-white bg-black border-3 border-accent focus:outline-none focus:glow-accent"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 font-mono text-white bg-black border-3 border-accent focus:outline-none focus:glow-accent"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                className="btn"
              >
                SEND MESSAGE
              </button>
            </motion.div>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-center text-accent glow-accent"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
