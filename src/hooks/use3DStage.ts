import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function use3DStage(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 128, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: "#ffd600",
      metalness: 0.3,
      roughness: 0.4,
      wireframe: false,
      clearcoat: 0.1,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const wireGeo = new THREE.TorusKnotGeometry(1.25, 0.45, 32, 16);
    const wireMat = new THREE.MeshBasicMaterial({
      color: "#ffd600",
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      targetRotX = mouse.current.y * 0.5;
      targetRotY = mouse.current.x * 0.5;

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      mesh.rotation.x = currentRotX;
      mesh.rotation.y = currentRotY + Date.now() * 0.0003;
      wireMesh.rotation.x = -currentRotX;
      wireMesh.rotation.y = -(currentRotY + Date.now() * 0.0003);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
    };
  }, [canvasRef]);
}
