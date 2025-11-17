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
    if (projects.length === 0) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    })

    tl.to(trackRef.current, {
      x: '-100%',
      ease: 'none',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [projects])

  return (
    <section className="py-20 overflow-hidden text-white bg-gray-900">
      <div ref={containerRef} className="relative">
        <div ref={trackRef} className="flex">
          {projects.concat(projects).map((project, index) => (
            <div key={`${project._id}-${index}`} className="flex-shrink-0 mx-4 w-80">
              <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
                <img
                  src={project.imageUrl || '/placeholder-image.jpg'}
                  alt={project.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techTags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-sm bg-blue-600 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
