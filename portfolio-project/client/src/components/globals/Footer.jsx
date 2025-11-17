import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="transition-colors hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="#" className="transition-colors hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="transition-colors hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">Inspired by Awwwards</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
