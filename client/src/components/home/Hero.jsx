import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-50">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-6xl font-bold text-black md:text-8xl text-display"
        >
          Hi, I'm Abhishek M G
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 text-xl text-gray-600 md:text-2xl"
        >
          Aspiring Python Developer
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
        >
          VIEW MY WORK
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
