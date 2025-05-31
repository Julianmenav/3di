import { nanoid } from "nanoid";
import Cube from "./Cube";

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

  return cubes.map(({ key, pos, texture }) => {
    return <Cube key={key} position={pos} texture={texture} />;
  });
};
