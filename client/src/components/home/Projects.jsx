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
    <section id="projects" className="py-20 pl-64 text-white bg-black">
      <div className="grid-brutalist">
        <div className="grid-item-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 text-4xl font-bold border-4 md:text-6xl text-display border-accent"
          >
            PROJECTS
          </motion.h2>
        </div>
        <div className="grid-item-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px #00ff88' }}
                className="relative overflow-hidden card-brutalist"
              >
                {/* Geometric Pattern */}
                <div className="absolute top-4 right-4 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <polygon points="20,5 35,20 20,35 5,20" fill="#00ff88" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold text-display">{project.title}</h3>
                <p className="mb-4 opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techTags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 font-mono text-xs text-black border-2 bg-accent border-accent"
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
                    className="px-3 py-1 transition-all border-2 text-accent hover:glow-accent border-accent hover:bg-accent hover:text-black"
                  >
                    GITHUB
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 transition-all border-2 text-accent hover:glow-accent border-accent hover:bg-accent hover:text-black"
                  >
                    LIVE
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
