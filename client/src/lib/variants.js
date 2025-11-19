export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        }
    }
}

export const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(255, 69, 0, 0.3)",
        transition: {
            duration: 0.3
        }
    }
}

export const buttonVariants = {
    idle: { scale: 1 },
    hover: {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 69, 0, 0.5)",
        transition: {
            duration: 0.2
        }
    },
    tap: { scale: 0.95 }
}

export const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const fireParticleVariants = {
    animate: {
        y: [-10, -30, -10],
        x: [-5, 5, -5],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}