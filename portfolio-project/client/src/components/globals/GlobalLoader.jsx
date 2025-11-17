import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GlobalLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000) // Simulate loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ y: 0 }}
      animate={isLoaded ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-4xl font-bold text-white">
        Loading...
      </div>
    </motion.div>
  )
}

export default GlobalLoader
