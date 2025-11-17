import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: '1',
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Three.js featuring smooth animations and interactive 3D elements.',
      techTags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      techTags: ['Node.js', 'MongoDB', 'Stripe', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: '3',
      title: 'Data Analysis Tool',
      description: 'Python-based data analysis application with GUI for processing and visualizing datasets.',
      techTags: ['Python', 'Pandas', 'PyQt6', 'Matplotlib'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
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
    <section id="projects" className="py-20 text-white bg-black">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center md:text-6xl"
        >
          My Projects
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
              whileHover={{ scale: 1.05 }}
              className="p-6 transition-transform bg-gray-800 rounded-lg"
            >
              <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs text-black rounded-full bg-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
