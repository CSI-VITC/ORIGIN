'use client';

import { useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

interface CustomAsciiRendererProps {
  characters?: string;
  fgColor?: string;
  bgColor?: string;
  invert?: boolean;
  resolution?: number;
}

export default function CustomAsciiRenderer({
  characters = ' .:-+*=%@#',
  fgColor = 'white',
  bgColor = 'transparent',
  invert = false,
  resolution = 0.15
}: CustomAsciiRendererProps) {
  const { gl, scene, camera, size } = useThree();

  const effect = useMemo(() => {
    const eff = new AsciiEffect(gl, characters, { invert, color: false, resolution });
    eff.domElement.style.position = 'absolute';
    eff.domElement.style.top = '0px';
    eff.domElement.style.left = '0px';
    eff.domElement.style.color = fgColor;
    eff.domElement.style.backgroundColor = bgColor;
    eff.domElement.style.pointerEvents = 'none';
    return eff;
  }, [gl, characters, invert, resolution, fgColor, bgColor]);

  useEffect(() => {
    // Hide the actual WebGL canvas so we ONLY see the ASCII overlay
    gl.domElement.style.opacity = '0';
    gl.domElement.parentNode?.appendChild(effect.domElement);
    return () => {
      gl.domElement.style.opacity = '1';
      gl.domElement.parentNode?.removeChild(effect.domElement);
    };
  }, [effect, gl]);

  // We call setSize during render to absolutely guarantee that iWidth/iHeight 
  // are never undefined when the very first useFrame executes.
  if (effect) {
    effect.setSize(Math.floor(size.width), Math.floor(size.height));
  }

  useFrame(() => {
    effect.render(scene, camera);
  }, 1);

  return null;
}
