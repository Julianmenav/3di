import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cubodi({ position = [0, 0, 0], rotation = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/react-threejs/Cubodi.glb");
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh geometry={nodes.Cube.geometry} material={materials["Material.001"]} position={position} rotation={rotation} />
    </group>
  );
}

useGLTF.preload("/react-threejs/Cubodi.glb");
