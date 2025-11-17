import { useState, useEffect } from 'react'

const useMouseHover = () => {
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseEnter = () => setIsHovering(true)
        const handleMouseLeave = () => setIsHovering(false)

        const hoverElements = document.querySelectorAll('a, button, [data-hover]')

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return isHovering
}

export default useMouseHover