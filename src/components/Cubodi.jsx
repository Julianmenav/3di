import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cubodi(props) {
  const { nodes, materials } = useGLTF('/react-threejs/Cubodi.glb')
  return (
    <group {...props} dispose={null} scale={1}  >
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0.4, 4.8, -2.5]} rotation={[Math.PI / 3, 0, 0]}/>
    </group>
  )
}

useGLTF.preload('/react-threejs/Cubodi.glb')