import { create } from "zustand";

const useStore = create((set) => ({
  gameStarted: false,
  startGame: () => set(() => ({ gameStarted: true })),
}));

export default useStore;
