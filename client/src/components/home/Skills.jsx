import { FaPython, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiNumpy, SiPandas, SiMysql, SiSqlite, SiScikitlearn, SiPytorch, SiQt } from 'react-icons/si'
import { motion } from 'framer-motion'

const Skills = () => {
  const proficientSkills = [
    { name: 'Python', icon: FaPython, color: 'text-accent' },
    { name: 'NumPy', icon: SiNumpy, color: 'text-accent' },
    { name: 'Pandas', icon: SiPandas, color: 'text-accent' },
    { name: 'MySQL', icon: SiMysql, color: 'text-accent' },
    { name: 'SQLite', icon: SiSqlite, color: 'text-accent' },
    { name: 'Git', icon: FaGitAlt, color: 'text-accent' },
  ]

  const familiarSkills = [
    { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-accent' },
    { name: 'PyTorch', icon: SiPytorch, color: 'text-accent' },
    { name: 'Hugging Face', icon: SiPytorch, color: 'text-accent' },
    { name: 'PyQt6', icon: SiQt, color: 'text-accent' },
    { name: 'Beautiful Soup', icon: FaCode, color: 'text-accent' },
    { name: 'Unit Testing', icon: FaCode, color: 'text-accent' },
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
    <section className="py-20 pl-64 text-white bg-black">
      <div className="grid-brutalist">
        <div className="grid-item-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 text-4xl font-bold border-4 md:text-6xl text-display border-accent"
          >
            SKILLS
          </motion.h2>
        </div>
        <div className="grid-item-2">
          <div className="space-y-12">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block p-3 mb-6 text-2xl font-semibold border-2 text-accent border-accent"
              >
                PROFICIENT
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 md:grid-cols-3"
              >
                {proficientSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ff88' }}
                    className="flex flex-col items-center justify-center p-6 transition-all bg-black border-3 border-accent hover:glow-accent group"
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-mono text-sm font-medium text-center">{skill.name}</span>
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
                className="inline-block p-3 mb-6 text-2xl font-semibold border-2 text-accent border-accent"
              >
                FAMILIAR
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 md:grid-cols-3"
              >
                {familiarSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ff88' }}
                    className="flex flex-col items-center justify-center p-6 transition-all bg-black border-3 border-accent hover:glow-accent group"
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-mono text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
