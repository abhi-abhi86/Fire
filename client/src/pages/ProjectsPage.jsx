import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaDatabase, FaRobot } from 'react-icons/fa'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: '1',
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Three.js featuring smooth animations and interactive 3D elements.',
      techTags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web',
      icon: FaRocket,
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      techTags: ['Node.js', 'MongoDB', 'Stripe', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web',
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3',
      title: 'Data Analysis Tool',
      description: 'Python-based data analysis application with GUI for processing and visualizing datasets.',
      techTags: ['Python', 'Pandas', 'PyQt6', 'Matplotlib'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'python',
      icon: FaDatabase,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: '4',
      title: 'ML Chatbot',
      description: 'Intelligent chatbot powered by NLP and machine learning for automated customer support.',
      techTags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'ml',
      icon: FaRobot,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: '5',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      techTags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'web',
      icon: FaCode,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: '6',
      title: 'Image Recognition API',
      description: 'REST API for image classification and object detection using deep learning models.',
      techTags: ['Python', 'FastAPI', 'PyTorch', 'OpenCV'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'ml',
      icon: FaRobot,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'python', name: 'Python Apps', count: projects.filter(p => p.category === 'python').length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-purple-500/5 blur-3xl animate-pulse delay-2000"></div>
        </div>
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
            My <span className="text-transparent bg-gradient-to-r from-accent to-blue-400 bg-clip-text">Projects</span>
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
            Explore the projects I've worked on, showcasing my skills in web development, Python applications, and machine learning.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-black shadow-lg shadow-accent/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative group overflow-hidden bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-accent/50 transition-all duration-500 ${
                  project.featured ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute z-10 top-4 right-4">
                    <span className="px-3 py-1 text-xs font-bold text-black rounded-full bg-accent">
                      Featured
                    </span>
                  </div>
                )}

                <div className="relative p-6">
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-blue-400/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-3xl text-accent" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techTags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-black transition-colors rounded-full bg-accent/80 hover:bg-accent"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-lg" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black transition-colors rounded-lg bg-accent hover:bg-accent/80"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block p-8 border bg-gradient-to-r from-accent/20 to-blue-400/20 rounded-3xl border-accent/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-white">Have a Project in Mind?</h3>
            <p className="mb-6 text-gray-300">
              I'm always excited to work on new challenges and bring ideas to life.
            </p>
            <motion.button
              className="px-8 py-3 font-semibold text-black transition-all duration-300 rounded-full bg-accent hover:bg-opacity-80 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.button>
          </motion.div>
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

export default ProjectsPage
