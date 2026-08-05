'use client';

import { Suspense, useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Bounds, Center } from '@react-three/drei';
import * as THREE from 'three';
import CustomAsciiRenderer from './CustomAsciiRenderer';



function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // We create a uniform white material to completely strip out any 
    // colorful textures or materials embedded inside the .glb file.
    // This ensures the ASCII renderer only sees pure geometry and light.
    const blankMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.material = blankMaterial;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Spin it along its own axis. 
      modelRef.current.rotation.x += delta * 0.5;
    }
  });

  // rotation=[0, 0, Math.PI / 2] lays the DNA horizontally
  return <primitive ref={modelRef} object={scene} rotation={[0, 0, Math.PI / 2]} />;
}

export default function AsciiModelBackground({ modelPath = '/assets/dna.glb' }: { modelPath?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="absolute inset-0 z-0 bg-transparent" />;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-transparent overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={4} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={2} color="#FF4D1C" />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.4}>
            <Center>
              <Model url={modelPath} />
            </Center>
          </Bounds>
        </Suspense>
        
        {/* Replaced Drei's AsciiRenderer with our custom one to fix the crash */}
        <CustomAsciiRenderer fgColor="#8A8A8A" bgColor="transparent" characters=" .:-+*=%@#" invert={false} resolution={0.2} />
      </Canvas>
    </div>
  );
}
