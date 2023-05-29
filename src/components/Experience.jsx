import { Environment, PresentationControls, Stage } from '@react-three/drei';
import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Chair from './Chair';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./models/chair.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

const Experience = () => {
  return (
    <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={'city'} intensity={.6} contactShadow={false} >
            <Suspense fallback={null}>
                <Chair/>
            <Environment preset="sunset"  />
            </Suspense>
            </Stage>
    </PresentationControls>
  );
};

export default Experience;
