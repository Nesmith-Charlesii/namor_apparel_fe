import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei'; // Optional: provides a Box component

const BasicScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]}>
        <meshStandardMaterial attach="material" color="black" />
      </Box>
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial attach="material" color="purple" />
      </Box>
    </Canvas>
  );
};

export default BasicScene;