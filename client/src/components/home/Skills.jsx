import { FaPython, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiNumpy, SiPandas, SiMysql, SiSqlite, SiScikitlearn, SiPytorch, SiQt } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  const proficientSkills = [
    { name: 'Python', icon: FaPython },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Pandas', icon: SiPandas },
    { name: 'MySQL', icon: SiMysql },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'Git', icon: FaGitAlt },
  ]

  const familiarSkills = [
    { name: 'scikit-learn', icon: SiScikitlearn },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Hugging Face', icon: SiPytorch },
    { name: 'PyQt6', icon: SiQt },
    { name: 'Beautiful Soup', icon: FaCode },
    { name: 'Unit Testing', icon: FaCode },
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
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-4xl font-bold text-center text-black md:text-6xl text-display"
        >
          SKILLS
        </motion.h2>
        <div className="space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl font-semibold text-center text-black"
            >
              PROFICIENT
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
            >
              {proficientSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <skill.icon className="mb-3 text-4xl text-gray-800 transition-colors group-hover:text-black" />
                  </motion.div>
                  <span className="text-sm font-medium text-center text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl font-semibold text-center text-black"
            >
              FAMILIAR
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
            >
              {familiarSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <skill.icon className="mb-3 text-4xl text-gray-600 transition-colors group-hover:text-gray-800" />
                  </motion.div>
                  <span className="text-sm font-medium text-center text-gray-600">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
