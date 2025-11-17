import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 })
      gsap.to(dot, { opacity: 0, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(dot, { opacity: 1, duration: 0.3 })
    }

    document.addEventListener('mousemove', moveCursor)

    const hoverElements = document.querySelectorAll('a, button, [data-hover]')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-50 w-1 h-1 bg-white rounded-full pointer-events-none mix-blend-difference"
      />
    </>
  )
}

export default CustomCursor
