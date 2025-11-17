ximport { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TorusKnot, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  const meshRef = useRef()

  useFrame((state) => {
    const { mouse } = state
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.5
      meshRef.current.rotation.y = mouse.x * 0.5
    }
  })

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      ease: 'none',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <TorusKnot ref={meshRef} args={[1, 0.4, 100, 16]}>
      <meshPhysicalMaterial
        transmission={0.9}
        opacity={1}
        metalness={0}
        roughness={0}
        ior={1.5}
        thickness={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </TorusKnot>
  )
}

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black hero-section">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
          <EffectComposer>
            <Bloom intensity={0.5} />
            <Vignette eskil={false} offset={0.1} darkness={0.5} />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-6xl font-bold md:text-8xl">
          Hi, I'm <span className="text-accent">Abhishek M G</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-80">
          Aspiring Python Developer
        </p>
      </div>
    </section>
  )
}

export default Hero
