import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  cubes: [
    { key: nanoid(), pos: [1, 0.5, 1], texture: "dirt" },
    { key: nanoid(), pos: [1, 1.5, 1], texture: "wood" },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
