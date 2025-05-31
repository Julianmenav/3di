import { nanoid } from "nanoid";
import Cube from "./Cube";
import { wallMessageTexture } from "../images/textures";

export const Wall = ({ position = [0, 0, 0], width = 5, height = 3, texture }) => {
  let cubes = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      cubes.push({
        key: nanoid(),
        pos: [position[0] + i, position[1] + j, position[2]],
        texture: texture,
      });
    }
  }

  return (
    <>
      {/* Wall */}
      {cubes.map(({ key, pos, texture }) => {
        return <Cube key={key} position={pos} texture={texture} />;
      })}
      {/* Wall mesage */}
      <mesh position={[position[0] + width / 2 - 0.5, position[1] + height / 2 - 0.7, position[2] + 0.51]} rotation={[0, 0, Math.PI / 18]}>
        <planeGeometry args={[width / 1.3, height * 1.2]} />
        <meshBasicMaterial map={wallMessageTexture} transparent={true} />
      </mesh>
    </>
  );
};
