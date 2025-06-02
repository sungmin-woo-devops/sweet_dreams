import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { cn } from '../../utils/cn';

interface ModelViewerProps {
  placeholderType?: 'cupcake' | 'donut' | 'cake' | 'generic';
  className?: string;
  autoRotate?: boolean;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  placeholderType = 'generic',
  className,
  autoRotate = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0xf8f9fa);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create placeholder model based on type
    let geometry: THREE.BufferGeometry;
    let material: THREE.Material;

    switch (placeholderType) {
      case 'cupcake':
        // Base (wrapper)
        const wrapper = new THREE.Mesh(
          new THREE.CylinderGeometry(0.7, 0.5, 1, 32),
          new THREE.MeshPhongMaterial({ color: 0xd4a76a })
        );
        wrapper.position.y = -0.5;
        scene.add(wrapper);

        // Top (frosting)
        const frosting = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
          new THREE.MeshPhongMaterial({ color: 0xff9eb5 })
        );
        frosting.position.y = 0.2;
        scene.add(frosting);
        break;

      case 'donut':
        geometry = new THREE.TorusGeometry(1, 0.5, 16, 32);
        material = new THREE.MeshPhongMaterial({ color: 0xf6a6b2 });
        const donut = new THREE.Mesh(geometry, material);
        scene.add(donut);
        break;

      case 'cake':
        // Base layer
        const baseLayer = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.5, 1, 32),
          new THREE.MeshPhongMaterial({ color: 0xf8e8cc })
        );
        baseLayer.position.y = -0.5;
        scene.add(baseLayer);

        // Frosting layer
        const frostingLayer = new THREE.Mesh(
          new THREE.CylinderGeometry(1.5, 1.5, 0.2, 32),
          new THREE.MeshPhongMaterial({ color: 0xff9eb5 })
        );
        frostingLayer.position.y = 0.1;
        scene.add(frostingLayer);
        break;

      default:
        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        material = new THREE.MeshPhongMaterial({
          color: 0xffb6c1,
          shininess: 100
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
    }

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.domElement.remove();
      }
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, [placeholderType, autoRotate]);

  return (
    <div ref={containerRef} className={cn("w-full h-64 md:h-96", className)} />
  );
};