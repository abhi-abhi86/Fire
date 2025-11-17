import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 pl-64 text-white bg-black">
      <div className="grid-brutalist">
        <div className="grid-item-1">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 text-4xl font-bold border-4 md:text-6xl text-display border-accent"
          >
            ABOUT
          </motion.h2>
        </div>
        <div className="grid-item-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 space-y-6 bg-black border-4 border-accent"
          >
            <p className="text-lg leading-relaxed md:text-xl">
              Hi, I'm Abhishek M G, an aspiring Python Developer currently pursuing a Bachelor of Computer Applications (B.C.A).
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              I enjoy problem-solving, designing and implementing efficient software, and building data workflows, web apps, and GUI tools.
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              I'm passionate about experimenting with Machine Learning (ML) and Natural Language Processing (NLP) models.
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              I emphasize writing clean, readable code with proper documentation and using Git for version control.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
