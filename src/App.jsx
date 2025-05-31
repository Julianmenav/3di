import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FPV from "./components/FPV";
import Ground from "./components/Ground";
import Player from "./components/Player";
import Cubedi from "./components/Cubedi";
import { woodTexture } from "./images/textures";
import { Wall } from "./components/Wall";
import Cube from "./components/Cube";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics gravity={[0, -20, 0]}>
          <Player />
          <Ground />
          <Cubedi position={[0, 1.5, -8]} />
          <Wall position={[-2, 0.5, -5]} texture={woodTexture} />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}

export default App;
