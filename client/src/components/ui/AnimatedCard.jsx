import { useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedCard = ({ children, className = '', glassmorphism = true, tiltIntensity = 15 }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -tiltIntensity
    const rotateY = ((x - centerX) / centerX) * tiltIntensity

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
  }

  const glassClasses = glassmorphism
    ? 'backdrop-blur-md bg-black/20 border border-white/10'
    : 'bg-black border-4 border-accent'

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${glassClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        boxShadow: '0 20px 40px rgba(255, 69, 0, 0.3)',
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fire-red via-fire-orange to-fire-yellow opacity-20 animate-pulse-fire" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default AnimatedCard
