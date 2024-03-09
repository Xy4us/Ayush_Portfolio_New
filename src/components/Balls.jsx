import PropTypes from "prop-types";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../utils/canvas/CanvasLoader";

const Balls = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.65}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonoffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
        />
      </mesh>
    </Float>
  );
};

Balls.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const BallsCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Balls imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallsCanvas.propTypes = {
  icon: PropTypes.string,
};

BallsCanvas.defaultProps = {
  icon: "", // Provide a default icon if none is provided
};

export default BallsCanvas;
