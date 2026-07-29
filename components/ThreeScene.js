'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeScene({ onLoaded, onProgress }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const modelsRef = useRef({});

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene, Camera, and WebGL Renderer
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#c9d2e7');
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(2.093, -4.505, 44.601);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
      stencil: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Setup Ambient and Spotlight Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(15, 30, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // 3. Load Models via DRACO Decoder
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/newModels/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const modelsToLoad = [
      { name: 'platform', url: '/newModels/Platform-O.glb', pos: [4, -7, 0.6], scale: 1 },
      { name: 'clouds', url: '/newModels/Clouds.glb', pos: [8, -0.5, 1], scale: 1.5 },
      { name: 'jellyfish', url: '/newModels/Jellyfish.glb', pos: [14.5, 5.1, -2.3], scale: 0.8 },
      { name: 'cards', url: '/newModels/Cards2Anim.glb', pos: [15.8, 12.6, -0.4], scale: 1 },
      { name: 'awwwards', url: '/newModels/awwwardsModel.glb', pos: [21.5, 11.3, 2.3], scale: 1.2 },
      { name: 'reddot', url: '/newModels/reddot.glb', pos: [23.5, 11.3, 2.3], scale: 1.2 },
      { name: 'webbby', url: '/newModels/webbby.glb', pos: [25.5, 11.3, 2.3], scale: 1.2 }
    ];

    let loadedCount = 0;
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.2,
      transmission: 1.0,
      thickness: 0.5,
      ior: 1.5,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    modelsToLoad.forEach(m => {
      gltfLoader.load(m.url, (gltf) => {
        const model = gltf.scene;
        model.position.set(...m.pos);
        model.scale.set(m.scale, m.scale, m.scale);

        model.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (m.name === 'platform' || child.name.toLowerCase().includes('glass')) {
              child.material = glassMaterial;
            }
          }
        });

        scene.add(model);
        modelsRef.current[m.name] = model;

        loadedCount++;
        if (onProgress) {
          onProgress(Math.round((loadedCount / modelsToLoad.length) * 100));
        }

        if (loadedCount === modelsToLoad.length) {
          setupScrollAnimations();
          if (onLoaded) onLoaded();
        }
      }, undefined, (err) => {
        console.error(`Error loading model ${m.name}:`, err);
      });
    });

    // 4. Setup Camera Path Coordinates & target interpolation
    const lookTarget = new THREE.Vector3(4.093, -7.005, 0.601);

    const setupScrollAnimations = () => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2, // smoother scrub lag
          invalidateOnRefresh: true,
        }
      });

      const cameraPath = [
        { pos: { x: 2.093, y: -4.505, z: 44.601 }, target: { x: 4.093, y: -7.005, z: 0.601 } },
        { pos: { x: -2.484, y: 3.733, z: 30.641 }, target: { x: 7.958, y: -0.55, z: 1.019 } },
        { pos: { x: -1.475, y: 9.953, z: 18.201 }, target: { x: 14.485, y: 5.069, z: -2.278 } },
        { pos: { x: 0.783, y: 14.749, z: 13.3 }, target: { x: 15.777, y: 12.603, z: -0.428 } },
        { pos: { x: 4.024, y: 22.301, z: 7.031 }, target: { x: 17.443, y: 20.712, z: 0.431 } },
        { pos: { x: 23.346, y: 20.432, z: 2.102 }, target: { x: 23.342, y: 20.293, z: 1.263 } },
        { pos: { x: 23.321, y: 15.607, z: 3.911 }, target: { x: 23.301, y: 15.457, z: 1.984 } },
        { pos: { x: 23.312, y: 14.16, z: 4.024 }, target: { x: 23.292, y: 14.01, z: 2.097 } },
        { pos: { x: 23.292, y: 11.443, z: 4.236 }, target: { x: 23.272, y: 11.293, z: 2.309 } }
      ];

      cameraPath.forEach((step, idx) => {
        if (idx === 0) return;
        scrollTimeline.to(camera.position, {
          x: step.pos.x,
          y: step.pos.y,
          z: step.pos.z,
          ease: 'power2.inOut',
          duration: 1,
        }, idx - 1);

        scrollTimeline.to(lookTarget, {
          x: step.target.x,
          y: step.target.y,
          z: step.target.z,
          ease: 'power2.inOut',
          duration: 1,
          onUpdate: () => {
            camera.lookAt(lookTarget);
          }
        }, idx - 1);
      });
    };

    // 5. Mouse Parallax Tracker
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const onMouseMove = (event) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // 6. Interactive Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Fluid mouse lag filter interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Parallax mouse tilt applied to hero platform
      if (modelsRef.current.platform) {
        modelsRef.current.platform.rotation.y = mouse.x * 0.2;
        modelsRef.current.platform.rotation.x = -mouse.y * 0.2;
      }

      // Jellyfish dynamic swim trigger timeline
      if (modelsRef.current.jellyfish) {
        modelsRef.current.jellyfish.rotation.y = elapsed * 0.2;
        modelsRef.current.jellyfish.position.y = 5.1 + Math.sin(elapsed * 1.5) * 0.15;
      }

      // Dynamic cards tilt timeline
      if (modelsRef.current.cards) {
        modelsRef.current.cards.rotation.y = elapsed * 0.1;
        modelsRef.current.cards.position.y = 12.6 + Math.cos(elapsed * 1.2) * 0.1;
      }

      // Awards trophies rotations
      if (modelsRef.current.awwwards) modelsRef.current.awwwards.rotation.y += 0.01;
      if (modelsRef.current.reddot) modelsRef.current.reddot.rotation.y += 0.012;
      if (modelsRef.current.webbby) modelsRef.current.webbby.rotation.y += 0.008;

      camera.lookAt(lookTarget);
      renderer.render(scene, camera);
    };
    animate();

    // 7. Window resize adjustments
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      scene.traverse(object => {
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach(mat => mat.dispose());
        } else {
          object.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="main-scene"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
