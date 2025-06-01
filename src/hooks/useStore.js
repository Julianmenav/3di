import { create } from "zustand";

const useStore = create((set) => ({
  gameStarted: false,
  hasLookedBack: false,
  startGame: () => set(() => ({ gameStarted: true })),
  setHasLookedBack: () => set(() => ({ hasLookedBack: true })),
}));

export default useStore;
