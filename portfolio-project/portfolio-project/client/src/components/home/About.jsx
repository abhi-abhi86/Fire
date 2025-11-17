import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const textRef = useRef()

  useEffect(() => {
    const splitText = new SplitText(textRef.current, { type: 'lines' })
    const lines = splitText.lines

    gsap.set(lines, { y: '100%', opacity: 0 })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    }).to(lines, {
      y: '0%',
      opacity: 1,
      stagger: 0.1,
      ease: 'power3.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="py-20 bg-gray-100 about-section">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">About Me</h2>
          <p ref={textRef} className="text-lg leading-relaxed md:text-xl">
            I'm a passionate creative developer with a love for blending art and technology.
            I specialize in creating immersive web experiences that push the boundaries of
            what's possible on the web. With expertise in modern web technologies and a
            keen eye for design, I bring ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
