import { motion } from 'framer-motion'
import Contact from '../components/home/Contact'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Let's connect! Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>
        <Contact />
      </div>
    </motion.div>
  )
}

export default ContactPage
