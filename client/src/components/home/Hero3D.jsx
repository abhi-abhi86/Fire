import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus, Stars, Float, Text, Ring } from '@react-three/drei'
import * as THREE from 'three'

const RealisticBlenderAstrophysicalSystem = () => {
  const groupRef = useRef()
  const centralStarRef = useRef()
  const planetRef = useRef()
  const moonRef = useRef()
  const accretionDiskRef = useRef()
  const particleFieldRef = useRef()
  const solarFlaresRef = useRef()
  const magneticFieldRef = useRef()

  // Scroll tracking state
  const [scrollY, setScrollY] = useState(0)
  const [animationPhase, setAnimationPhase] = useState('entering')

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Determine animation phase
      if (currentScrollY > 500) {
        setAnimationPhase('exited')
      } else if (currentScrollY > 300) {
        setAnimationPhase('exiting')
      } else if (currentScrollY < 100) {
        setAnimationPhase('entering')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Create realistic astrophysical particle system
  const particleCount = 3000
  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Create realistic galactic distribution
      const galaxyType = Math.floor(Math.random() * 3)

      if (galaxyType === 0) {
        // Spiral arms
        const arm = Math.floor(Math.random() * 4)
        const angle = Math.random() * Math.PI * 8 + arm * Math.PI / 2
        const radius = Math.random() * 12 + 3
        const armOffset = Math.sin(angle * 2) * 0.8

        positions[i3] = Math.cos(angle) * (radius + armOffset)
        positions[i3 + 1] = (Math.random() - 0.5) * 1.5 + Math.sin(angle * 3) * 0.3
        positions[i3 + 2] = Math.sin(angle) * (radius + armOffset)
      } else if (galaxyType === 1) {
        // Accretion disk
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 8 + 1
        const height = (Math.random() - 0.5) * 0.3

        positions[i3] = Math.cos(angle) * radius
        positions[i3 + 1] = height
        positions[i3 + 2] = Math.sin(angle) * radius
      } else {
        // Halo/stellar streams
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = Math.random() * 15 + 5

        positions[i3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = r * Math.cos(phi)
      }

      // Realistic stellar colors based on temperature
      const temperature = Math.random()
      if (temperature > 0.8) {
        colors[i3] = 0.8 + Math.random() * 0.2     // Blue-white hot stars
        colors[i3 + 1] = 0.6 + Math.random() * 0.3
        colors[i3 + 2] = 1.0
      } else if (temperature > 0.5) {
        colors[i3] = 1.0                          // Yellow-white main sequence
        colors[i3 + 1] = 0.8 + Math.random() * 0.2
        colors[i3 + 2] = 0.4 + Math.random() * 0.3
      } else {
        colors[i3] = 1.0                          // Red giants/cool stars
        colors[i3 + 1] = 0.3 + Math.random() * 0.4
        colors[i3 + 2] = 0.1 + Math.random() * 0.2
      }

      sizes[i] = Math.random() * 0.05 + 0.01
    }

    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    const { clock } = state
    const time = clock.getElapsedTime()

    // Time-based trigger (starts after 3 seconds)
    const animationTriggered = time > 3

    // Scroll-based animation control
    const scrollProgress = Math.min(scrollY / 300, 1)
    const exitProgress = Math.max((scrollY - 300) / 200, 0)

    // Only apply scroll effects after animation is triggered
    const effectiveExitProgress = animationTriggered ? exitProgress : 0
    const effectiveScrollProgress = animationTriggered ? scrollProgress : 0

    // Central star with realistic solar activity
    if (centralStarRef.current) {
      centralStarRef.current.rotation.y = time * 0.2
      centralStarRef.current.rotation.x = Math.sin(time * 0.1) * 0.05

      // Solar differential rotation (equator rotates faster than poles)
      const latitude = Math.sin(time * 0.15)
      centralStarRef.current.rotation.z += (0.3 + latitude * 0.1) * 0.01

      // Scroll-based movement - move upward as user scrolls down (only after 3 seconds)
      if (animationTriggered) {
        if (animationPhase === 'exiting') {
          centralStarRef.current.position.y = effectiveExitProgress * 8
          centralStarRef.current.position.z = effectiveExitProgress * 5
        } else if (animationPhase === 'entering') {
          centralStarRef.current.position.y = Math.max(0, (1 - effectiveScrollProgress) * -2)
          centralStarRef.current.position.z = Math.max(0, (1 - effectiveScrollProgress) * -3)
        }
      }
    }

    // Planetary motion with realistic Keplerian orbits
    if (planetRef.current) {
      const orbitalPeriod = 8 // seconds for one orbit
      const angle = (time / orbitalPeriod) * Math.PI * 2
      const semiMajorAxis = 4.5
      const eccentricity = 0.1

      // Elliptical orbit with proper Keplerian motion
      const r = semiMajorAxis * (1 - eccentricity * Math.cos(angle))
      planetRef.current.position.x = Math.cos(angle) * r
      planetRef.current.position.z = Math.sin(angle) * r

      // Realistic planetary rotation
      planetRef.current.rotation.y = time * 1.5
      planetRef.current.rotation.x = Math.sin(time * 0.5) * 0.1
    }

    // Lunar motion around planet
    if (moonRef.current && planetRef.current) {
      const planetPos = planetRef.current.position
      const moonAngle = time * 3
      const moonDistance = 0.8

      moonRef.current.position.x = planetPos.x + Math.cos(moonAngle) * moonDistance
      moonRef.current.position.z = planetPos.z + Math.sin(moonAngle) * moonDistance
      moonRef.current.position.y = planetPos.y + Math.sin(time * 2) * 0.2

      moonRef.current.rotation.y = time * 0.8

      // Scroll-based movement
      if (animationPhase === 'exiting') {
        moonRef.current.position.y += exitProgress * 5.5
        moonRef.current.position.z += exitProgress * 2.5
      } else if (animationPhase === 'entering') {
        moonRef.current.position.y = Math.max(0, (1 - scrollProgress) * -1.2)
      }
    }

    // Accretion disk with realistic physics
    if (accretionDiskRef.current) {
      accretionDiskRef.current.rotation.z = time * 0.5

      // Inner disk rotates faster (Keplerian velocity)
      const innerRotation = time * 1.2
      const outerRotation = time * 0.3

      // Pulsing effect like variable accretion
      const intensity = 1 + Math.sin(time * 1.5) * 0.3
      accretionDiskRef.current.scale.setScalar(intensity)

      // Scroll-based movement
      if (animationPhase === 'exiting') {
        accretionDiskRef.current.position.y = exitProgress * 7
        accretionDiskRef.current.position.z = exitProgress * 4
      } else if (animationPhase === 'entering') {
        accretionDiskRef.current.position.y = Math.max(0, (1 - scrollProgress) * -1.8)
        accretionDiskRef.current.position.z = Math.max(0, (1 - scrollProgress) * -2.5)
      }
    }

    // Solar flares and coronal mass ejections
    if (solarFlaresRef.current) {
      const flares = solarFlaresRef.current.children
      flares.forEach((flare, index) => {
        const flareTime = time + index * 0.5
        const intensity = Math.sin(flareTime * 2) * Math.cos(flareTime * 1.5)
        if (intensity > 0.7) {
          flare.scale.setScalar(intensity)
          flare.visible = true
        } else {
          flare.visible = false
        }
      })
    }

    // Magnetic field visualization
    if (magneticFieldRef.current) {
      magneticFieldRef.current.rotation.y = time * 0.1
      magneticFieldRef.current.rotation.x = Math.sin(time * 0.2) * 0.1
    }

    // Galactic particle system with realistic dynamics
    if (particleFieldRef.current) {
      const positions = particleFieldRef.current.geometry.attributes.position.array

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Differential galactic rotation
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2)
        if (radius > 0) {
          const rotationSpeed = 0.3 / Math.sqrt(radius) // Keplerian rotation
          const angle = Math.atan2(positions[i3 + 2], positions[i3]) + time * rotationSpeed * 0.02

          positions[i3] = Math.cos(angle) * radius
          positions[i3 + 2] = Math.sin(angle) * radius
        }

        // Vertical oscillations like spiral density waves
        positions[i3 + 1] += Math.sin(time * 0.5 + radius * 0.1) * 0.002
      }

      particleFieldRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Overall galactic rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.02

      // Scroll-based group movement
      if (animationPhase === 'exiting') {
        groupRef.current.position.y = exitProgress * 4
        groupRef.current.position.z = exitProgress * 2
      } else if (animationPhase === 'entering') {
        groupRef.current.position.y = Math.max(0, (1 - scrollProgress) * -1)
        groupRef.current.position.z = Math.max(0, (1 - scrollProgress) * -1.5)
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Star with realistic solar materials */}
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.05}>
        <Sphere ref={centralStarRef} args={[1.2, 128, 128]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.1}
            roughness={0.8}
            emissive="#ffaa00"
            emissiveIntensity={0.4}
            envMapIntensity={0.5}
            transparent={animationPhase === 'exiting' ? true : false}
            opacity={animationPhase === 'exiting' ? Math.max(0.1, 1 - exitProgress) : 1}
          />
        </Sphere>
      </Float>

      {/* Solar Corona/Chromosphere */}
      <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Accretion Disk with realistic materials */}
      <Torus ref={accretionDiskRef} args={[3.5, 0.8, 32, 128]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff6b35"
          metalness={0.9}
          roughness={0.1}
          emissive="#ff4500"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </Torus>

      {/* Inner Accretion Ring */}
      <Ring args={[2.5, 3.0, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffaa00"
          metalness={0.8}
          roughness={0.2}
          emissive="#ff8800"
          emissiveIntensity={0.5}
          transparent
          opacity={animationPhase === 'exiting' ? Math.max(0.1, 0.6 - exitProgress * 0.5) : 0.6}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Planet with realistic Earth-like appearance */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.1}>
        <Sphere ref={planetRef} args={[0.5, 64, 64]}>
          <meshStandardMaterial
            color="#4a90e2"
            metalness={0.1}
            roughness={0.9}
            normalScale={new THREE.Vector2(0.5, 0.5)}
          />
        </Sphere>
      </Float>

      {/* Moon */}
      <Sphere ref={moonRef} args={[0.15, 32, 32]}>
        <meshStandardMaterial
          color="#c0c0c0"
          metalness={0.2}
          roughness={0.8}
        />
      </Sphere>

      {/* Solar Flares */}
      <group ref={solarFlaresRef}>
        {[...Array(6)].map((_, i) => (
          <Sphere
            key={i}
            args={[0.3, 16, 16]}
            position={[
              Math.cos(i * Math.PI / 3) * 2,
              Math.sin(i * Math.PI / 6) * 0.5,
              Math.sin(i * Math.PI / 3) * 2
            ]}
          >
            <meshBasicMaterial
              color="#ffff00"
              transparent
              opacity={0.8}
            />
          </Sphere>
        ))}
      </group>

      {/* Magnetic Field Lines */}
      <Torus ref={magneticFieldRef} args={[4, 0.05, 8, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
        />
      </Torus>

      {/* Realistic Galactic Particle Field */}
      <points ref={particleFieldRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particleData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={particleData.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particleCount}
            array={particleData.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          alphaTest={0.001}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Orbital Path Visualization */}
      <Torus args={[4.5, 0.02, 2, 128]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.2}
        />
      </Torus>
    </group>
  )
}

const Hero3D = () => {
  return (
    <>
      {/* Professional Blender-style lighting setup */}
      <ambientLight intensity={0.1} color="#ffffff" />

      {/* Key light (main illumination) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Fill light */}
      <directionalLight
        position={[-3, 2, -3]}
        intensity={0.5}
        color="#87ceeb"
      />

      {/* Rim light for definition */}
      <directionalLight
        position={[0, -5, 5]}
        intensity={0.3}
        color="#ffaa00"
      />

      {/* Colored practical lights */}
      <pointLight
        position={[8, 8, 8]}
        intensity={1}
        color="#ffd700"
        distance={20}
        decay={2}
      />
      <pointLight
        position={[-8, -8, -8]}
        intensity={0.8}
        color="#4a90e2"
        distance={15}
        decay={2}
      />
      <pointLight
        position={[0, 10, 0]}
        intensity={0.6}
        color="#ff6b35"
        distance={12}
        decay={2}
      />

      {/* Starfield background */}
      <Stars
        radius={300}
        depth={100}
        count={8000}
        factor={6}
        saturation={0.5}
        fade
        speed={0.2}
      />

      {/* Atmospheric fog */}
      <fog attach="fog" args={['#000011', 20, 100]} />

      <RealisticBlenderAstrophysicalSystem />

      {/* Professional camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.15}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 8}
        enableDamping
        dampingFactor={0.1}
      />
    </>
  )
}

export default Hero3D
