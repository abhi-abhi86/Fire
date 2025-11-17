import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setIsSubmitting(false)
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setStatus('')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'abhishekmg@example.com',
      description: 'Send me an email anytime',
      color: 'text-red-400'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Call me for quick discussions',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bangalore, India',
      description: 'Based in Bangalore, Karnataka',
      color: 'text-blue-400'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-purple-500/5 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="mb-6 text-6xl font-bold md:text-8xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Get In <span className="text-transparent bg-gradient-to-r from-accent to-blue-400 bg-clip-text">Touch</span>
          </motion.h1>
          <motion.div
            className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute opacity-25 -inset-1 bg-gradient-to-r from-accent to-blue-400 rounded-3xl blur"
                animate={{
                  background: [
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <div className="relative p-8 border border-gray-800 bg-gray-900/80 backdrop-blur-sm rounded-3xl">
                <h3 className="mb-6 text-3xl font-bold text-accent">Send a Message</h3>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 text-white transition-all duration-300 border border-gray-700 bg-gray-800/50 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 text-white transition-all duration-300 border border-gray-700 bg-gray-800/50 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 text-white transition-all duration-300 border border-gray-700 bg-gray-800/50 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 text-white transition-all duration-300 border border-gray-700 resize-none bg-gray-800/50 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-accent text-black hover:bg-accent/80 hover:scale-105'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.7 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black rounded-full border-t-transparent"
                        ></motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 p-4 border bg-green-500/20 border-green-500/30 rounded-xl"
                    >
                      <FaCheckCircle className="text-xl text-green-400" />
                      <span className="font-medium text-green-400">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute opacity-25 -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
              <div className="relative p-8 border border-gray-800 bg-gray-900/80 backdrop-blur-sm rounded-3xl">
                <h3 className="mb-6 text-3xl font-bold text-accent">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 transition-colors bg-gray-800/50 rounded-xl hover:bg-gray-800/70"
                      >
                        <div className={`p-3 rounded-xl bg-gray-700 ${info.color}`}>
                          <Icon className="text-xl" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">{info.title}</h4>
                          <p className="mb-1 font-medium text-accent">{info.value}</p>
                          <p className="text-sm text-gray-400">{info.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="p-6 border bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-400">Available for Projects</span>
              </div>
              <p className="text-sm text-gray-300">
                I'm currently available for freelance work and full-time opportunities.
                Let's discuss how we can work together!
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="p-6 border border-gray-800 bg-gray-900/60 backdrop-blur-sm rounded-xl"
            >
              <h4 className="mb-4 text-xl font-bold text-white">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', url: 'https://github.com', color: 'hover:text-gray-300' },
                  { name: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
                  { name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-300' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-gray-800 rounded-lg text-gray-300 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20"
        >
          <h3 className="mb-12 text-3xl font-bold text-center text-white">Frequently Asked Questions</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: "What's your typical response time?",
                answer: "I usually respond to messages within 24 hours during weekdays."
              },
              {
                question: "Do you work remotely?",
                answer: "Yes, I'm comfortable working remotely and have experience with distributed teams."
              },
              {
                question: "What type of projects do you take on?",
                answer: "I work on web development, Python applications, and machine learning projects."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, I offer maintenance and support packages for projects I've developed."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 + index * 0.1 }}
                className="p-6 border border-gray-800 bg-gray-900/60 backdrop-blur-sm rounded-xl"
              >
                <h4 className="mb-3 text-lg font-semibold text-accent">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-4 h-4 rounded-full top-20 left-10 bg-accent animate-bounce"></div>
      <div className="absolute w-6 h-6 delay-300 bg-blue-400 rounded-full top-40 right-20 animate-bounce"></div>
      <div className="absolute w-3 h-3 delay-700 bg-purple-400 rounded-full bottom-32 left-20 animate-bounce"></div>
      <div className="absolute w-5 h-5 delay-1000 rounded-full bottom-20 right-10 bg-accent animate-bounce"></div>
    </motion.div>
  )
}

export default ContactPage
