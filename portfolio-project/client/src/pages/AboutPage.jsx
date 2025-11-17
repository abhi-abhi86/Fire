import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        containerRef.current.style.setProperty('--mouse-x', `${x}px`)
        containerRef.current.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      style={{
        background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container px-4 py-20 mx-auto pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20 text-center"
        >
          <motion.h1
            className="mb-6 text-6xl font-bold md:text-8xl lg:text-9xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent animate-gradient">Me</span>
          </motion.h1>
          <motion.div
            className="w-32 h-1 mx-auto bg-gradient-to-r from-accent to-blue-400 rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Discover my journey, passion, and the experiences that shape my approach to development and problem-solving.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-400 rounded-2xl blur opacity-25"
                animate={{
                  background: [
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800">
                <h3 className="mb-6 text-3xl font-bold text-accent">Who I Am</h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Hi, I'm <span className="font-semibold text-white">Abhishek M G</span>, an aspiring Python Developer currently pursuing a Bachelor of Computer Applications (B.C.A).
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    I enjoy problem-solving, designing and implementing efficient software, and building data workflows, web apps, and GUI tools.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    I'm passionate about experimenting with Machine Learning (ML) and Natural Language Processing (NLP) models.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Values */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-25"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800">
                <h3 className="mb-6 text-3xl font-bold text-accent">My Approach</h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    I emphasize writing <span className="font-semibold text-white">clean, readable code</span> with proper documentation and using Git for version control.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 }}
                  >
                    My goal is to create <span className="font-semibold text-white">efficient solutions</span> that not only work but are maintainable and scalable.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    I'm always eager to learn new technologies and tackle challenging problems that push my boundaries.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 text-center bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-accent/50 transition-colors">
                <motion.div
                  className="text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.6, type: "spring" }}
                >
                  2+
                </motion.div>
                <div className="text-gray-400">Years Learning</div>
              </div>
              <div className="p-6 text-center bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-accent/50 transition-colors">
                <motion.div
                  className="text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.8, type: "spring" }}
                >
                  10+
                </motion.div>
                <div className="text-gray-400">Projects Built</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-accent/20 to-blue-400/20 rounded-3xl border border-accent/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">Let's Work Together</h3>
            <p className="mb-6 text-gray-300">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <motion.button
              className="px-8 py-3 font-semibold text-black transition-all duration-300 rounded-full bg-accent hover:bg-opacity-80 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-accent rounded-full animate-bounce delay-1000"></div>
    </motion.div>
  )
}

export default AboutPage
