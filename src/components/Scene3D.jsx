import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, Icosahedron, Float, Points, PointMaterial } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 700

// Drifting neural particle field
function Neurons({ count = isMobile ? 900 : 2200 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 16
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.008
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8fb6ff" size={0.05} sizeAttenuation depthWrite={false} opacity={0.9} />
    </Points>
  )
}

// Central "AI core" — a glowing distorting orb inside a counter-rotating wireframe shell
function Core() {
  const inner = useRef()
  const shell = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const px = state.pointer.x * 0.4
    const py = state.pointer.y * 0.4
    if (inner.current) {
      inner.current.rotation.y = THREE.MathUtils.lerp(inner.current.rotation.y, px + t * 0.1, 0.04)
      inner.current.rotation.x = THREE.MathUtils.lerp(inner.current.rotation.x, -py, 0.04)
    }
    if (shell.current) {
      shell.current.rotation.y -= 0.0025
      shell.current.rotation.z += 0.0012
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
      <group>
        <Sphere ref={inner} args={[1.9, 64, 64]}>
          <meshStandardMaterial
            color="#1e40af"
            emissive="#4f86ff"
            emissiveIntensity={1.0}
            roughness={0.15}
            metalness={0.9}
          />
        </Sphere>
        <Icosahedron ref={shell} args={[2.7, 1]}>
          <meshBasicMaterial color="#5b8cff" wireframe transparent opacity={0.22} />
        </Icosahedron>
      </group>
    </Float>
  )
}

// Pull the camera back on narrow screens so the core becomes a backdrop, not a wall
function ResponsiveCamera() {
  const { camera, size } = useThree()
  useEffect(() => {
    camera.position.z = size.width < 700 ? 14 : size.width < 1024 ? 10 : 8
    camera.updateProjectionMatrix()
  }, [size.width, camera])
  return null
}

export default function Scene3D() {
  return (
    <Canvas
      className="bg-canvas"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
      dpr={isMobile ? [1, 1.3] : [1, 1.8]}
      camera={{ position: [0, 0, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ResponsiveCamera />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#8b5cf6" />
      <directionalLight position={[-6, -3, 2]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[0, 0, 4]} intensity={2.4} color="#3b82f6" />
      <Core />
      <Neurons />
      <EffectComposer disableNormalPass>
        <Bloom intensity={1.15} luminanceThreshold={0.18} luminanceSmoothing={0.5} mipmapBlur radius={0.7} />
        <Vignette eskil={false} offset={0.25} darkness={0.85} />
      </EffectComposer>
    </Canvas>
  )
}
