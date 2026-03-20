import { Float, Grid, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Mesh } from 'three'

type CardProps = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale?: number
}

function FloatingCard({ position, rotation, scale = 1 }: CardProps) {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.35 + position[0]) * 0.05
  })

  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1.5, 0.9, 0.08]} />
        <meshPhysicalMaterial
          color="#7dd3fc"
          transparent
          opacity={0.2}
          transmission={0.95}
          roughness={0.08}
          metalness={0.28}
        />
      </mesh>
    </Float>
  )
}

function OrbitingNodes() {
  const refs = useRef<Mesh[]>([])
  const count = 12
  const offsets = useMemo(
    () => Array.from({ length: count }, (_, idx) => (idx / count) * Math.PI * 2),
    [],
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    refs.current.forEach((node, idx) => {
      if (!node) return

      const phase = offsets[idx]
      const radius = 1.5 + Math.sin(t * 0.7 + idx) * 0.18
      const x = Math.cos(t * 0.45 + phase) * radius
      const z = Math.sin(t * 0.45 + phase) * (radius * 0.6)
      const y = Math.sin(t * 0.9 + phase * 2) * 0.45

      node.position.set(x, y, z)
      node.scale.setScalar(0.8 + (Math.sin(t * 1.2 + idx) + 1) * 0.22)
    })
  })

  return (
    <group>
      {offsets.map((offset, idx) => (
        <mesh
          key={`${offset}-${idx}`}
          ref={(element) => {
            if (!element) return
            refs.current[idx] = element
          }}
        >
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? '#67e8f9' : '#14b8a6'}
            emissive={idx % 2 === 0 ? '#0e7490' : '#0f766e'}
            emissiveIntensity={0.5}
            metalness={0.4}
            roughness={0.18}
          />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.025, 16, 160]} />
        <meshStandardMaterial color="#22d3ee" emissive="#0e7490" emissiveIntensity={0.25} />
      </mesh>
    </group>
  )
}

function CoreObject() {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.12
    ref.current.rotation.y += delta * 0.24
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.58, 1]} />
      <meshStandardMaterial
        color="#99f6e4"
        wireframe
        emissive="#115e59"
        emissiveIntensity={0.38}
        metalness={0.35}
        roughness={0.3}
      />
    </mesh>
  )
}

function CameraDrift() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { camera } = state

    camera.position.x = Math.sin(t * 0.14) * 0.45
    camera.position.y = 1 + Math.cos(t * 0.11) * 0.2
    camera.position.z = 5 + Math.sin(t * 0.09) * 0.18
    camera.lookAt(0, 0.35, 0)
  })

  return null
}

export function Hero3DPanel() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 1.1, 5.2], fov: 42 }} dpr={[1, 1.8]}>
        <color attach="background" args={['#050a18']} />
        <fog attach="fog" args={['#050a18', 4.5, 10]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[2.8, 2.5, 2]} intensity={1.1} color="#67e8f9" />
        <pointLight position={[-2.2, 0.8, 1.2]} intensity={0.85} color="#2dd4bf" />
        <CameraDrift />

        <group position={[0, 0.45, 0]}>
          <FloatingCard position={[-1.25, 0.35, -0.3]} rotation={[0.1, 0.5, -0.2]} scale={0.95} />
          <FloatingCard position={[1.05, 0.18, -0.5]} rotation={[0.15, -0.45, 0.17]} />
          <FloatingCard position={[0, -0.32, -1]} rotation={[0.2, 0, 0.04]} scale={1.05} />
          <CoreObject />
          <OrbitingNodes />
        </group>

        <Grid
          position={[0, -1.15, 0]}
          args={[8, 8]}
          sectionSize={1}
          sectionThickness={1.25}
          sectionColor="#0f766e"
          cellSize={0.35}
          cellThickness={0.55}
          cellColor="#0e7490"
          fadeDistance={16}
          fadeStrength={1.8}
          infiniteGrid
        />
        <Sparkles count={90} size={1.4} scale={[7, 2.5, 4]} speed={0.18} color="#67e8f9" />
      </Canvas>
    </div>
  )
}
