import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'

const Navbar = () => {
  useEffect(() => {
    gsap.from('.navbar-item', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
    })
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl px-4 py-6 mx-auto">
        <div className="flex items-center justify-between">
          <div className="navbar-item">
            <NavLink to="/" className="text-2xl font-bold text-white">
              Portfolio
            </NavLink>
          </div>
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className="text-white transition-colors navbar-item hover:text-accent"
              activeClassName="text-accent"
            >
              Home
            </NavLink>
            <a
              href="#about"
              className="text-white transition-colors navbar-item hover:text-accent"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white transition-colors navbar-item hover:text-accent"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white transition-colors navbar-item hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
