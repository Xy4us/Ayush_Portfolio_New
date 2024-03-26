import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../utils/canvas/CanvasLoader";

const Earth = () => {
  const earth = useGLTF("./earthTexture/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 70,
          near: 0.1,
          far: 10,
          position: [-4, 3, 6],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />

          <ambientLight intensity={-1} />
          <pointLight position={[1, 1, 1]} intensity={3} color="#3e0845" />
          <spotLight angle={Math.PI / 2} intensity={4} />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
