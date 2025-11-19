import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Three.js featuring smooth animations and interactive 3D elements.',
      techTags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Portfolio'
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      techTags: ['Node.js', 'MongoDB', 'Stripe', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=E-commerce'
    },
    {
      id: '3',
      title: 'Data Analysis Tool',
      description: 'Python-based data analysis application with GUI for processing and visualizing datasets.',
      techTags: ['Python', 'Pandas', 'PyQt6', 'Matplotlib'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://via.placeholder.com/400x300/000000/FFFFFF?text=Data+Tool'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-center text-black md:text-6xl text-display"
        >
          PROJECTS
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="cursor-pointer group"
            >
              <div className="bg-gray-100 aspect-[4/3] mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black transition-colors hover:text-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GITHUB →
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black transition-colors hover:text-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LIVE →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
