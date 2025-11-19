import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Hero3D from '../home/Hero3D'

const GlobalLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoaded(true), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      animate={{ y: isLoaded ? "-100%" : "0%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* 3D Fire Background */}
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Hero3D />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-8"
        >
          <motion.div
            className="relative w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {/* Fire ring */}
            <div className="absolute inset-0 border-4 rounded-full border-fire-orange animate-pulse-fire" />
            <div className="absolute border-2 rounded-full inset-2 border-fire-yellow animate-pulse-fire" style={{ animationDelay: '0.5s' }} />
            <div className="absolute border-2 rounded-full inset-4 border-fire-red animate-pulse-fire" style={{ animationDelay: '1s' }} />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-white"
        >
          Abhishek M G
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-64 h-1 mx-auto mb-4 bg-gray-600 rounded-full"
        >
          <motion.div
            className="h-full rounded-full bg-accent"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-400"
        >
          Loading Portfolio... {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  )
}

export default GlobalLoader
