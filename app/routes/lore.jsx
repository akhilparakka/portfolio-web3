import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";

function useAxeModel() {
  return useGLTF("models/lowpoly_ramen_bowl.glb");
}

function Model(props) {
  const meshRef = useRef();
  const { scene } = useAxeModel();
  const [active, setActive] = useState(false);

  scene.scale.set(0.5, 0.5, 0.5);

  return (
    <primitive
      object={scene}
      ref={meshRef}
      {...props}
      onClick={() => setActive(!active)}
    />
  );
}

const Lore = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 15, 10], fov: 50 }}
        style={{ background: "#f0f0f0" }}
      >
        <Stage
          adjustCamera
          intensity={0.5}
          shadows="contact"
          environment="city"
        >
          <Model position={[0, 0, 0]} />
        </Stage>

        <OrbitControls enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Lore;
