import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export default function Cubedi({ position = [0, 0, 0], rotation = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/react-threejs/Cubedi.glb");
  const [ref] = useBox(() => ({
    type: "Static",
    position,
    rotation,
  }));
  return (
    <group {...props} dispose={null} scale={1}>
      <mesh ref={ref} geometry={nodes.Cube.geometry} material={materials["Material.001"]} position={position} rotation={rotation} />
    </group>
  );
}

useGLTF.preload("/react-threejs/Cubedi.glb");
