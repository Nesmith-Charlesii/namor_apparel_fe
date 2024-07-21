import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useStyles from './styles';

const Sphere = () => {
  const classes = useStyles();
  const canvasRef = useRef(null); // Ref for the canvas element

  useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a sphere geometry and material, then combine them into a mesh
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({ 
        color: '#00ff83' 
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Light
    const light = new THREE.PointLight(0xffffff, 70, 100, 1.7)
    light.position.set(0, 10, 10)
    scene.add(light)

    // Create a camera and set its position
    const camera = new THREE.PerspectiveCamera(45, 800/600);
    camera.position.z = 10;
    scene.add(mesh)


    // Create a renderer and attach it to the canvas
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(800, 600);
    renderer.render(scene, camera);

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, [classes]);

  return (
    <canvas ref={canvasRef} className={classes.webGl} />
  )
};

export default Sphere;