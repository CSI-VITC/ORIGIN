'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds, Center } from '@react-three/drei';
import * as THREE from 'three';

// A simple spinning box to show while the heavy GLB model is downloading
function LoadingBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#FF4D1C" wireframe />
    </mesh>
  );
}

function Model({ url }: { url: string }) {
  // useGLTF will suspend the component until the model is fully loaded.
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Traverse the scene and force materials to be visible just in case they are entirely black
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        // Make sure it renders on both sides and isn't completely pitch black
        if (mesh.material) {
          (mesh.material as THREE.Material).side = THREE.DoubleSide;
        }
      }
    });
  }, [scene]);

  // Slowly rotate the model continuously
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function ModelViewer({ modelPath = '/assets/dna.glb' }: { modelPath?: string }) {
  return (
    <div className="w-full h-[300px] sm:h-[500px] relative z-30 pointer-events-auto cursor-grab active:cursor-grabbing my-12 bg-[#050505] border border-[#2A2A2A] shadow-[0_0_50px_rgba(255,77,28,0.05)] rounded-2xl overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Extremely bright lights so we guarantee the model is visible even if its materials are dark */}
        <ambientLight intensity={3} />
        <directionalLight position={[10, 10, 10]} intensity={5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={3} color="#FF4D1C" />
        <directionalLight position={[0, 10, -10]} intensity={2} color="#ffffff" />
        
        <Suspense fallback={<LoadingBox />}>
          {/* Bounds automatically calculates the size of the model and moves the camera so it fits perfectly in view */}
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <Model url={modelPath} />
            </Center>
          </Bounds>
        </Suspense>
        
        {/* OrbitControls let the user drag to rotate */}
        <OrbitControls makeDefault autoRotate autoRotateSpeed={1} enableZoom={true} />
      </Canvas>
    </div>
  );
}
