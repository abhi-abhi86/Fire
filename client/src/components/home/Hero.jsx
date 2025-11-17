import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'

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
        color="#A78BFA" // A nice violet color that works with the accent
      />
    </TorusKnot>
  )
}

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-cyan-900/20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
          <EffectComposer>
            <Bloom intensity={0.4} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
            <Vignette eskil={false} offset={0.1} darkness={0.6} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 p-8 text-center text-white rounded-lg backdrop-blur-sm bg-black/10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-4 text-5xl font-bold md:text-7xl"
        >
          Hi, I'm <span className="text-accent">Abhishek M G</span>
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
          className="px-8 py-3 font-semibold transition-all duration-300 border-2 rounded-full border-accent text-accent hover:bg-accent hover:text-black hover:scale-105"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
