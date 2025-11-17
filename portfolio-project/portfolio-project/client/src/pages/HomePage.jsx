import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Projects from '../components/home/Projects'
import Skills from '../components/home/Skills'
import Contact from '../components/home/Contact'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </motion.div>
  )
}

export default HomePage
