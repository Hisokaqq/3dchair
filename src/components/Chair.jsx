import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useCustomisation } from '../context/Custom';

const Chair = (props) => {
  const { material, legs, chairColor } = useCustomisation();
  const { nodes, materials } = useGLTF('./models/chair.gltf');

  const leatherTextureProps = useTexture({
    map: './textures/leather/Leather_Armor_002_basecolor.jpg',
    normalMap: './textures/leather/Leather_Armor_002_normal.jpg',
    roughnessMap: './textures/leather/Leather_Armor_002_roughness.jpg',
    aoMap: './textures/leather/Leather_Armor_002_ambientOcclusion.jpg',
  });

  const fabricTextureProps = useTexture({
    map: './textures/fabric/Honeycomb_002_basecolor.jpg',
    normalMap: './textures/fabric/Honeycomb_002_normal.jpg',
    roughnessMap: './textures/fabric/Honeycomb_002_roughness.jpg',
    aoMap: './textures/fabric/Honeycomb_002_ambientOcclusion.jpg',
  });

  leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);

  leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);

  fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  const chairMaterialProps = material === 'leather' ? leatherTextureProps : fabricTextureProps;
  chairMaterialProps.color = new THREE.Color(chairColor.color);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...chairMaterialProps} />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...fabricTextureProps} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={legs === 1} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={legs === 2} />
    </group>
  );
};

export default Chair;
