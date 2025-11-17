import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-black border-t-4 border-accent">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/abhi-abhi86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-m-g-706354370/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
