import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 text-white bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-bold md:text-6xl"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg leading-relaxed md:text-xl"
        >
          <p>
            Hi, I'm Abhishek M G, an aspiring Python Developer currently pursuing a Bachelor of Computer Applications (B.C.A).
          </p>
          <p>
            I enjoy problem-solving, designing and implementing efficient software, and building data workflows, web apps, and GUI tools.
          </p>
          <p>
            I'm passionate about experimenting with Machine Learning (ML) and Natural Language Processing (NLP) models.
          </p>
          <p>
            I emphasize writing clean, readable code with proper documentation and using Git for version control.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
