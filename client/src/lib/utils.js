// Debounce function for performance optimization
export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Map a value from one range to another
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// Clamp a value between min and max
export const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max)
}