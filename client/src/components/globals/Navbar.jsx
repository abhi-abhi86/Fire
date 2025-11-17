import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-black/50'
      }`}
    >
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <NavLink to="/" className="text-2xl font-bold text-white transition-colors hover:text-accent">
              Portfolio
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-6"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/links"
              className={({ isActive }) =>
                `text-white transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : ''
                }`
              }
            >
              Links
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
