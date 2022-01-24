import {  MeshWobbleMaterial, OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from 'three'
import { DoubleSide } from "three";
import { CursorContext } from "../../providers/useCursor";
import { ThemeContext } from "../../providers/useTheme";
import Scene from "../Scene";

const Test = ({offset = 0, reverse=false}) => {
  const ref = useRef()
  const buffer = useRef()
  const width = 1;
  const position = new THREE.Vector3(0, 0, 0)
  const curvePoints = []
  const num = 10;
  for (let i = 0; i < num; i++) {
    let theta = i/num * Math.PI * 2;
    curvePoints.push(
      new THREE.Vector3().setFromSphericalCoords(
        6, Math.PI/2 + (Math.random() - .5), theta
      )
      )
       
  }
  const curve = new THREE.CatmullRomCurve3(reverse ? curvePoints.reverse() : curvePoints, true)
  curve.tension = .7
  const points = curve.getPoints(50)
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  // useEffect(() => {
  //   buffer.current.setFromPoints(points)
  // }, [])

  let count = 0
  useFrame((state) => {
    count  += .001
    const time = state.clock.elapsedTime
    if(count > 1 ) count = 0
    const point = curve.getPointAt(count)
    // console.log(point)


    let array = [...ref.current.geometry.attributes.position.array]
    for(let i = 0; i < 6; i++){
      array.pop()
    }
    // // console.log(coordinates)

    // position.x = Math.sin(time*7)*(8 + Math.cos(time))
    // position.y = Math.cos(time*8)*(5 + Math.sin(time))
    const rot = [
      Math.sin(time) * width/2,
      Math.cos(time) * width/2
    ]
     array.unshift(
        point.x + rot[0],
        point.y + offset,
        point.z + rot[1]
      )
      array.unshift(
        point.x - rot[0],
        point.y + offset,
        point.z - rot[1]
      )
  
    // array.unshift(
    //   position.x + rot[0],
    //   position.y,
    //   position.z + rot[1]
    // )
    // array.unshift(
    //   position.x - rot[0],
    //   position.y,
    //   position.z - rot[1]
    // )
      
  
    ref.current.geometry.attributes.position.array = new Float32Array(array)
    // // ref.current.rotation.y += time/10
    ref.current.geometry.attributes.position.needsUpdate = true

  })

  return (
    <mesh position={[0,0,0]} ref={ref}>
      <planeBufferGeometry args={[1,1,1, 200]} />
      <MeshWobbleMaterial 
        side={DoubleSide}
        factor={.4}
        color={'gray'}
      />
      <line geometry={lineGeometry}>
        <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} />  
      </line>
      {/* <Line 
        geometry={lineGeometry}
        color={'black'}
        lineWidth={1}
      /> */}
      {/* <meshStandardMaterial 
        side={DoubleSide}
        color={'red'}
      /> */}
      {/* <meshStandardMaterial 
        side={DoubleSide}  
        wireframe={false} 
        color={'white'} 
      /> */}
      <ambientLight intensity={.3} />
      <directionalLight position={[0,0,5]} />
    </mesh>
  )
}

const CoisasThree = () => {
  const ContextBridge = useContextBridge(ThemeContext);

  return (
    <Canvas
      style={{
        height: "120vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 8] }}
    >
      {/* <ContextBridge>
        <Scene />
      </ContextBridge> */}

        <Test />
        <Test reverse={true} offset={2} />
        <Test offset={-3} />
      <OrbitControls />
    </Canvas>
  );
};

export default CoisasThree;
