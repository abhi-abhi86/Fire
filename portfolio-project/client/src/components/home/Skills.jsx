import { FaPython, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiNumpy, SiPandas, SiMysql, SiSqlite, SiScikitlearn, SiPytorch, SiQt } from 'react-icons/si'

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

  return (
    <section className="py-20 text-white bg-black">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-6xl">
          Skills & Technologies
        </h2>
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-center text-accent">Proficient</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {proficientSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 group"
              >
                <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-center text-accent">Familiar / Practical Use</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {familiarSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 transition-colors bg-gray-800 rounded-lg hover:bg-gray-700 group"
              >
                <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
