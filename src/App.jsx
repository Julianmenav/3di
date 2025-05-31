import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FPV from "./components/FPV";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubedi from "./components/Cubedi";
import { stoneTexture, woodTexture } from "./images/textures";
import { Wall } from "./components/Wall";
import Start from "./pages/Start";
import useStore from "./hooks/useStore";
import { useEffect, useRef } from "react";

function App() {
  const { gameStarted, startGame } = useStore();

  const canvasRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (gameStarted && canvasRef.current) {
        canvasRef.current.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    }, 300);
  }, [gameStarted]);

  return (
    <>
      {!gameStarted && <Start startGameFn={startGame} />}
      <Canvas
        onCreated={({ gl }) => {
          canvasRef.current = gl.domElement;
        }}
      >
        <Sky sunPosition={[0, -1, 0]} inclination={1} />
        <ambientLight intensity={0.28} />
        {gameStarted && <FPV />}
        <Physics gravity={[0, -20, 0]} move>
          <Player />
          <Ground />
          <Cubedi position={[0, 1.5, -8]} />
          <Wall position={[-2, 0.5, -5]} texture={stoneTexture} />
        </Physics>
      </Canvas>
      {gameStarted && <div className="absolute centered cursor">+</div>}
    </>
  );
}

export default App;
