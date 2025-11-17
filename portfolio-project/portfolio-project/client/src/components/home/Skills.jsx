import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3, color: 'text-blue-600' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-6xl">Skills</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <skill.icon className={`text-6xl mb-4 ${skill.color}`} />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
