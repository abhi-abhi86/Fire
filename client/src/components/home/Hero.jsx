import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const DataStream = () => {
  const [codeLines, setCodeLines] = useState([
    'import sys',
    'def main():',
    '    print("Hello World")',
    '    return 0',
    'if __name__ == "__main__":',
    '    sys.exit(main())'
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev]
        newLines[Math.floor(Math.random() * newLines.length)] = generateRandomCode()
        return newLines
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const generateRandomCode = () => {
    const codes = [
      'def process_data():',
      'class NeuralNet:',
      'import numpy as np',
      'for i in range(100):',
      'if condition:',
      'return result',
      'self.train()',
      'data = load_csv()'
    ]
    return codes[Math.floor(Math.random() * codes.length)]
  }

  return (
    <div className="absolute z-10 transform -translate-y-1/2 right-8 top-1/2">
      <div className="p-4 font-mono text-sm bg-black border-4 text-mono text-accent border-accent glow-accent">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-1"
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Model = () => {
  const meshRef = useRef()

  useFrame((state) => {
    const { clock, mouse } = state
    if (meshRef.current) {
      // Smoothly interpolate rotation towards mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.2, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.2, 0.05)
      // Gentle, continuous rotation
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <TorusKnot ref={meshRef} args={[1, 0.4, 128, 32]}>
      <meshPhysicalMaterial
        transmission={0.95}
        opacity={1}
        metalness={0.1}
        roughness={0}
        ior={1.7}
        thickness={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
        color="#00ff88" // Changed to accent green
      />
    </TorusKnot>
  )
}

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen pl-64 overflow-hidden bg-black">
      {/* Wireframe Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff88" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00ff88" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
          <EffectComposer>
            <Bloom intensity={0.4} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
            <Vignette eskil={false} offset={0.1} darkness={0.6} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Data Stream */}
      <DataStream />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 p-8 text-center text-white border-4 border-accent bg-black/90 glow-accent"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-4 text-5xl font-bold md:text-7xl text-display animate-glitch"
        >
          Hi, I'm <span className="text-accent glow-accent">Abhishek M G</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mb-8 text-xl md:text-2xl opacity-80"
        >
          Aspiring Python Developer
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="btn"
        >
          VIEW MY WORK
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
