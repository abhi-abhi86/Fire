import { FaPython, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiNumpy, SiPandas, SiMysql, SiSqlite, SiScikitlearn, SiPytorch, SiQt } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  const proficientSkills = [
    { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
    { name: 'NumPy', icon: SiNumpy, color: 'text-blue-400' },
    { name: 'Pandas', icon: SiPandas, color: 'text-blue-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-400' },
    { name: 'SQLite', icon: SiSqlite, color: 'text-blue-300' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-400' },
  ]

  const familiarSkills = [
    { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
    { name: 'Hugging Face', icon: SiPytorch, color: 'text-yellow-500' },
    { name: 'PyQt6', icon: SiQt, color: 'text-green-400' },
    { name: 'Beautiful Soup', icon: FaCode, color: 'text-green-500' },
    { name: 'Unit Testing', icon: FaCode, color: 'text-purple-400' },
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
    <section className="py-20 text-white bg-black">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center md:text-6xl"
        >
          Skills & Technologies
        </motion.h2>
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 text-2xl font-semibold text-center text-accent"
          >
            Proficient
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
                whileHover={{ scale: 1.1, y: -10 }}
                className="flex flex-col items-center justify-center p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 group"
              >
                <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
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
            className="mb-6 text-2xl font-semibold text-center text-accent"
          >
            Familiar / Practical Use
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
                whileHover={{ scale: 1.1, y: -10 }}
                className="flex flex-col items-center justify-center p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 group"
              >
                <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
