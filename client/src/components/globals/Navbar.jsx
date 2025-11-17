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
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed left-0 top-0 h-full w-64 z-40 border-r-4 border-accent bg-black transition-all duration-300 glow-accent ${
        isScrolled ? 'shadow-2xl' : ''
      }`}
    >
      <div className="flex flex-col h-full p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <NavLink to="/" className="text-2xl font-bold text-white transition-all text-display hover:text-accent hover:animate-glitch">
            PORTFOLIO
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            SKILLS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/links"
            className={({ isActive }) =>
              `text-white text-lg font-semibold transition-all hover:text-accent hover:glow-accent hover:border-l-4 hover:border-accent pl-4 ${
                isActive ? 'text-accent glow-accent border-l-4 border-accent' : ''
              }`
            }
          >
            LINKS
          </NavLink>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
