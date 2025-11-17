import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaPython, FaDatabase, FaGitAlt, FaCode, FaBrain, FaChartLine, FaRobot, FaServer } from 'react-icons/fa'
import { SiNumpy, SiPandas, SiMysql, SiSqlite, SiScikitlearn, SiPytorch, SiQt, SiTensorflow, SiFlask, SiFastapi, SiMongodb, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: FaCode },
    { id: 'python', name: 'Python', icon: FaPython },
    { id: 'web', name: 'Web Dev', icon: SiReact },
    { id: 'ml', name: 'ML/AI', icon: FaBrain },
    { id: 'database', name: 'Database', icon: FaDatabase },
    { id: 'tools', name: 'Tools', icon: FaGitAlt }
  ]

  const skillsData = {
    python: [
      { name: 'Python', icon: FaPython, level: 90, color: 'text-yellow-400', description: 'Core programming language' },
      { name: 'NumPy', icon: SiNumpy, level: 85, color: 'text-blue-400', description: 'Scientific computing' },
      { name: 'Pandas', icon: SiPandas, level: 85, color: 'text-blue-500', description: 'Data manipulation' },
      { name: 'PyQt6', icon: SiQt, level: 75, color: 'text-green-400', description: 'GUI development' },
      { name: 'Flask', icon: SiFlask, level: 80, color: 'text-gray-400', description: 'Web framework' },
      { name: 'FastAPI', icon: SiFastapi, level: 75, color: 'text-teal-400', description: 'API development' }
    ],
    web: [
      { name: 'React', icon: SiReact, level: 85, color: 'text-blue-400', description: 'Frontend framework' },
      { name: 'JavaScript', icon: SiJavascript, level: 80, color: 'text-yellow-400', description: 'Programming language' },
      { name: 'HTML5', icon: SiHtml5, level: 90, color: 'text-orange-500', description: 'Markup language' },
      { name: 'CSS3', icon: SiCss3, level: 85, color: 'text-blue-500', description: 'Styling language' },
      { name: 'Node.js', icon: SiNodedotjs, level: 75, color: 'text-green-500', description: 'Runtime environment' }
    ],
    ml: [
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 80, color: 'text-orange-500', description: 'Machine learning' },
      { name: 'TensorFlow', icon: SiTensorflow, level: 70, color: 'text-orange-400', description: 'Deep learning' },
      { name: 'PyTorch', icon: SiPytorch, level: 75, color: 'text-red-500', description: 'Neural networks' },
      { name: 'NLP', icon: FaBrain, level: 70, color: 'text-purple-400', description: 'Natural language processing' }
    ],
    database: [
      { name: 'MySQL', icon: SiMysql, level: 80, color: 'text-orange-400', description: 'Relational database' },
      { name: 'SQLite', icon: SiSqlite, level: 85, color: 'text-blue-300', description: 'Embedded database' },
      { name: 'MongoDB', icon: SiMongodb, level: 70, color: 'text-green-500', description: 'NoSQL database' }
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: 'text-red-400', description: 'Version control' },
      { name: 'VS Code', icon: FaCode, level: 90, color: 'text-blue-400', description: 'Code editor' },
      { name: 'Jupyter', icon: FaChartLine, level: 80, color: 'text-orange-500', description: 'Data science' }
    ]
  }

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat()
    }
    return skillsData[activeCategory] || []
  }

  const filteredSkills = getFilteredSkills()

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
            My <span className="text-transparent bg-gradient-to-r from-accent to-blue-400 bg-clip-text">Skills</span>
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
            Technologies and tools I work with to bring ideas to life and solve complex problems.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-black shadow-lg shadow-accent/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-lg" />
                {category.name}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-6 overflow-hidden transition-all duration-500 border border-gray-800 group bg-gray-900/80 backdrop-blur-sm rounded-2xl hover:border-accent/50"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-accent/5 to-blue-400/5 group-hover:opacity-100 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-blue-400/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`text-3xl ${skill.color}`} />
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-accent">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-sm text-gray-400">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="font-medium text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-accent to-blue-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/10 to-transparent group-hover:opacity-100 rounded-2xl"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4"
        >
          {[
            { label: 'Languages', value: '5+', icon: FaCode },
            { label: 'Frameworks', value: '8+', icon: FaServer },
            { label: 'Tools', value: '10+', icon: FaGitAlt },
            { label: 'Projects', value: '15+', icon: FaRobot }
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
            <h3 className="mb-4 text-2xl font-bold text-white">Always Learning</h3>
            <p className="mb-6 text-gray-300">
              Technology evolves rapidly, and I'm committed to staying current with the latest tools and techniques.
            </p>
            <motion.button
              className="px-8 py-3 font-semibold text-black transition-all duration-300 rounded-full bg-accent hover:bg-opacity-80 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
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

export default SkillsPage
