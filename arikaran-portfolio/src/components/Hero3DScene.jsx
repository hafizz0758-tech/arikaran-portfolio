import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, TorusKnot, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function SceneObjects() {
  const knot = useRef();
  const core = useRef();
  useFrame((state, delta) => {
    if (knot.current) {
      knot.current.rotation.x += delta * 0.12;
      knot.current.rotation.y += delta * 0.2;
    }
    if (core.current) {
      core.current.rotation.y -= delta * 0.16;
      core.current.rotation.x += delta * 0.08;
    }
    state.camera.position.x += (state.pointer.x * 0.16 - state.camera.position.x) * 0.015;
    state.camera.position.y += (state.pointer.y * 0.12 - state.camera.position.y) * 0.015;
  });

  return (
    <>
      <ambientLight intensity={1.15} />
      <pointLight position={[3, 3, 4]} intensity={24} color="#8b5cf6" />
      <pointLight position={[-3, -2, 2]} intensity={18} color="#43d9ff" />
      <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
        <TorusKnot ref={knot} args={[0.92, 0.22, 180, 24, 2, 5]}>
          <meshStandardMaterial color="#8e72ff" metalness={0.78} roughness={0.22} emissive="#40208f" emissiveIntensity={0.55} />
        </TorusKnot>
      </Float>
      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.5}>
        <Icosahedron ref={core} args={[0.45, 1]} position={[0.1, 0.05, 0.85]}>
          <MeshDistortMaterial color="#65e7ff" emissive="#0d6f99" emissiveIntensity={0.7} metalness={0.75} roughness={0.2} distort={0.24} speed={1.7} />
        </Icosahedron>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[-1.5, 0.85, -0.2]} rotation={[0.4, 0.6, 0]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#b7a7ff" metalness={0.8} roughness={0.18} emissive="#6449d5" emissiveIntensity={0.6} />
        </mesh>
      </Float>
      <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.55}>
        <mesh position={[1.45, -0.8, 0.2]} rotation={[0.2, 0.7, 0.4]}>
          <dodecahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#5de4ff" metalness={0.72} roughness={0.25} emissive="#0b6e9c" emissiveIntensity={0.65} />
        </mesh>
      </Float>
      <Sparkles count={70} scale={4.6} size={2.2} speed={0.22} opacity={0.7} color="#9c8aff" />
    </>
  );
}

export default function Hero3DScene() {
  return (
    <div className="hero-3d" aria-label="Abstract animated 3D technology artwork">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 43 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <SceneObjects />
      </Canvas>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="hero-3d-caption"><span className="status-dot" /> BUILDING WITH PURPOSE</div>
    </div>
  );
}
