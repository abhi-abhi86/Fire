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
      ease: 'power3.out'
    })
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="navbar-item">
            <NavLink to="/" className="text-xl font-bold text-white">
              Portfolio
            </NavLink>
          </div>
          <div className="flex space-x-6">
            <NavLink
              to="/"
              className="text-white transition-colors navbar-item hover:text-gray-300"
              activeClassName="text-blue-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/admin"
              className="text-white transition-colors navbar-item hover:text-gray-300"
              activeClassName="text-blue-400"
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
