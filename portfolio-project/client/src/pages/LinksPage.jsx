import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram, FaYoutube, FaCode, FaHeart } from 'react-icons/fa'

const LinksPage = () => {
  const links = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/abhi-abhi86',
      description: 'Check out my code repositories and contributions',
      color: 'hover:text-gray-300',
      gradient: 'from-gray-600 to-gray-800',
      category: 'code'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/abhishek-m-g',
      description: 'Connect with me professionally',
      color: 'hover:text-blue-400',
      gradient: 'from-blue-600 to-blue-800',
      category: 'professional'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:abhishekmg@example.com',
      description: 'Send me an email directly',
      color: 'hover:text-red-400',
      gradient: 'from-red-600 to-red-800',
      category: 'contact'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/abhi_abhi86',
      description: 'Follow me for updates and thoughts',
      color: 'hover:text-blue-300',
      gradient: 'from-blue-400 to-blue-600',
      category: 'social'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/abhi_abhi86',
      description: 'My personal photography and updates',
      color: 'hover:text-pink-400',
      gradient: 'from-pink-500 to-purple-600',
      category: 'social'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/@abhi-abhi86',
      description: 'Tech tutorials and project walkthroughs',
      color: 'hover:text-red-500',
      gradient: 'from-red-500 to-red-700',
      category: 'content'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Links', count: links.length },
    { id: 'code', name: 'Code', count: links.filter(l => l.category === 'code').length },
    { id: 'professional', name: 'Professional', count: links.filter(l => l.category === 'professional').length },
    { id: 'social', name: 'Social', count: links.filter(l => l.category === 'social').length },
    { id: 'contact', name: 'Contact', count: links.filter(l => l.category === 'contact').length },
    { id: 'content', name: 'Content', count: links.filter(l => l.category === 'content').length }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-purple-500/5 blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="mb-6 text-6xl font-bold md:text-8xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Let's <span className="text-transparent bg-gradient-to-r from-accent to-blue-400 bg-clip-text">Connect</span>
          </motion.h1>
          <motion.div
            className="w-32 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Find me on these platforms and let's start a conversation! I'm always excited to connect with fellow developers and potential collaborators.
          </motion.p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-accent/50 transition-all duration-500 p-6 ${link.color}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                  <div className="w-full h-full bg-gray-900/80 rounded-2xl"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-blue-400/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-4xl transition-transform text-accent group-hover:scale-110" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-accent">
                    {link.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed text-gray-400">
                    {link.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-medium capitalize rounded-full text-accent bg-accent/10">
                      {link.category}
                    </span>
                    <motion.div
                      className="transition-opacity opacity-0 text-accent group-hover:opacity-100"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100 rounded-2xl"></div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4"
        >
          {[
            { label: 'GitHub Repos', value: '25+', icon: FaCode },
            { label: 'LinkedIn Connections', value: '500+', icon: FaLinkedin },
            { label: 'Projects Completed', value: '15+', icon: FaGithub },
            { label: 'Happy Clients', value: '10+', icon: FaHeart }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                className="p-6 text-center transition-colors border border-gray-800 bg-gray-900/60 backdrop-blur-sm rounded-xl hover:border-accent/50"
              >
                <Icon className="mx-auto mb-3 text-3xl text-accent" />
                <div className="mb-1 text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block p-8 border bg-gradient-to-r from-accent/20 to-blue-400/20 rounded-3xl border-accent/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">Ready to Collaborate?</h3>
            <p className="mb-6 text-gray-300">
              Whether you have a project in mind, need technical consultation, or just want to chat about technology,
              I'm always open to interesting conversations and opportunities.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                className="px-8 py-3 font-semibold text-black transition-all duration-300 rounded-full bg-accent hover:bg-opacity-80 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              <motion.button
                className="px-8 py-3 font-semibold text-white transition-all duration-300 border rounded-full border-accent hover:bg-accent hover:text-black hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-gray-400">
            Made with <FaHeart className="inline mx-1 text-red-400" /> using React, Framer Motion, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Abhishek M G. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-4 h-4 rounded-full top-20 left-10 bg-accent animate-bounce"></div>
      <div className="absolute w-6 h-6 delay-300 bg-blue-400 rounded-full top-40 right-20 animate-bounce"></div>
      <div className="absolute w-3 h-3 delay-700 bg-purple-400 rounded-full bottom-32 left-20 animate-bounce"></div>
      <div className="absolute w-5 h-5 delay-1000 rounded-full bottom-20 right-10 bg-accent animate-bounce"></div>
    </motion.div>
  )
}

export default LinksPage
