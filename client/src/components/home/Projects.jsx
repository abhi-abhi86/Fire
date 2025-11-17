import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import api from '../../lib/api'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [projects, setProjects] = useState([])
  const containerRef = useRef()
  const trackRef = useRef()

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects')
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      const container = containerRef.current
      const track = trackRef.current

      if (container && track) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            pin: true,
          },
        })

        tl.fromTo(
          track,
          { x: 0 },
          { x: `-${(projects.length - 1) * 100}vw`, ease: 'none' }
        )
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [projects])

  return (
    <section id="projects" className="py-20 overflow-hidden text-white bg-gray-900">
      <div className="max-w-full">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-6xl">
          My Projects
        </h2>
        <div ref={containerRef} className="relative">
          <div
            ref={trackRef}
            className="flex"
            style={{ width: `${projects.length * 100}vw` }}
          >
            {projects.map((project, index) => (
              <div
                key={project._id || index}
                className="flex items-center justify-center w-screen h-screen px-8"
              >
                <div className="max-w-2xl text-center">
                  <img
                    src={project.imageUrl || '/placeholder-project.jpg'}
                    alt={project.title}
                    className="object-cover w-full h-64 mb-6 rounded-lg"
                  />
                  <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-lg">{project.shortDescription}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.techTags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm text-black rounded-full bg-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
