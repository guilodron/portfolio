import { useContextBridge } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { CursorContext } from "../../providers/useCursor";
import { ThemeContext } from "../../providers/useTheme";
import Scene from "../Scene";

const CoisasThree = () => {
  const ContextBridge = useContextBridge(CursorContext, ThemeContext);

  return (
    <Canvas
      style={{
        height: "120vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -1
      }}
      camera={{ position: [0, 0, 24] }}
    >
      <ContextBridge>
        <Scene />
      </ContextBridge>
    </Canvas>
  );
};

export default CoisasThree;
