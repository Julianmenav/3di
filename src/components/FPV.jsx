import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import useStore from "../hooks/useStore";

const FPV = () => {
  const { camera, gl } = useThree();
  const { hasLookedBack, setHasLookedBack } = useStore();
  const initialRotationRef = useRef(null);

  useEffect(() => {
    initialRotationRef.current = camera.rotation.x;
  }, []);

  useFrame(() => {
    if (initialRotationRef.current == null || hasLookedBack) return;

    const currentRotation = camera.rotation.x;
    const initialRotation = initialRotationRef.current;

    const delta = Math.abs(currentRotation - initialRotation);

    if (delta >= Math.PI - 0.08) {
      setHasLookedBack();
      console.log("Looked back");
    }
  });

  return <PointerLockControls args={[camera, gl.domElement]} />;
};

export default FPV;
