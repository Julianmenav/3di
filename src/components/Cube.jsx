import { useBox } from "@react-three/cannon";

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};

export default Cube;
