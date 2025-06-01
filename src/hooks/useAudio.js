import { useEffect } from "react";
import useStore from "./useStore";

export const useAudio = () => {
  const audio = new Audio("/sounds/stinger.mp3");
  const { hasLookedBack } = useStore();

  useEffect(() => {
    if (hasLookedBack) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [hasLookedBack, audio]);
};
