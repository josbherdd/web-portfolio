import { useGLTF, Float } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function BackgroundModels() {
  const { scene } = useGLTF('./models/background-model.glb')
  const ref = useRef()

  // parallax
  useFrame(({ pointer }) => {
    if (!ref.current) return
    
    // target positions based on mouse
    const targetX = pointer.x * 0.1
    const targetY = pointer.y * 0.1 

    // soft lerp to avoid strong movement
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetX,
      0.05
    )

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      targetY,
      0.05
    )
  })
  return (
    <>
      <Float
      speed={4}
      rotationIntensity={0.7}
      floatIntensity={0.8}
    >
      <group ref={ref}>
        <primitive object={scene} scale={1.1} />
      </group>
    </Float>
    </>
  )
}