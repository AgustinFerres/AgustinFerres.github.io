import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleWave() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container: HTMLElement | null = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, depth: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    container?.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(400, 400, 50, 50); // Increase the number of segments
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: .1 });
    const plane = new THREE.Points(geometry, material);

    scene.add(plane);

    camera.position.z = 50;
    camera.position.y = 1

    const animate = () => {
      requestAnimationFrame(animate);

      // Wave effect
      const { array } = plane.geometry.attributes.position;
      for (let i = 0; i < array.length; i += 3) {
        array[i + 2] = 2 * Math.sin(i / 5 + ((Date.now() * 0.001) % (2 * Math.PI)));
      }
      plane.geometry.attributes.position.needsUpdate = true; // Required after the position of the vertices has been changed

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return <Box ref={containerRef} sx={{ width: 1, height: 1, position: "absolute", top: 0, left: 0, zIndex: -1 }} />;
};
