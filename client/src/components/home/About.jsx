import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const headlineRef = useRef()
  const bodyRef = useRef()

  useEffect(() => {
    const headline = headlineRef.current
    const body = bodyRef.current

    if (headline && body) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })

      tl.fromTo(
        headline.children,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.1, ease: 'power2.out' }
      ).fromTo(
        body.children,
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.05, ease: 'power2.out' },
        '-=0.5'
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section id="about" className="py-20 text-white bg-gray-900 about-section">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 ref={headlineRef} className="mb-8 overflow-hidden text-4xl font-bold md:text-6xl">
          <span className="inline-block">About</span>{' '}
          <span className="inline-block">Me</span>
        </h2>
        <div ref={bodyRef} className="space-y-4 overflow-hidden text-lg leading-relaxed md:text-xl">
          <p className="inline-block">
            Hi, I'm Abhishek M G, an aspiring Python Developer currently pursuing a Bachelor of Computer Applications (B.C.A).
          </p>
          <p className="inline-block">
            I enjoy problem-solving, designing and implementing efficient software, and building data workflows, web apps, and GUI tools.
          </p>
          <p className="inline-block">
            I'm passionate about experimenting with Machine Learning (ML) and Natural Language Processing (NLP) models.
          </p>
          <p className="inline-block">
            I emphasize writing clean, readable code with proper documentation and using Git for version control.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
