import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const LinksPage = () => {
  const links = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
      description: 'Check out my code repositories and contributions',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourprofile',
      description: 'Connect with me professionally',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      description: 'Send me an email directly',
      color: 'hover:text-red-400'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourhandle',
      description: 'Follow me for updates and thoughts',
      color: 'hover:text-blue-300'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Let's <span className="text-accent">Connect</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Find me on these platforms and let's start a conversation!
          </p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl bg-gray-900/50 p-8 text-center transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 border border-gray-800 hover:border-accent/50 ${link.color}`}
              >
                <div className="relative z-10">
                  <Icon className="mx-auto mb-4 text-6xl transition-transform duration-300 text-accent group-hover:scale-110" />
                  <h3 className="mb-2 text-2xl font-bold">{link.name}</h3>
                  <p className="text-sm text-gray-400">{link.description}</p>
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-accent/10 to-transparent group-hover:opacity-100"></div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LinksPage
