import { useFrame } from '@react-three/fiber';
import React, { useContext, useRef } from 'react';
import Blob from '../Blob';
import Path from '../Path';
import * as THREE from 'three'
import { CursorContext, useCursor } from '../../providers/useCursor';
import { useTheme } from '../../providers/useTheme';

const Scene = () => {

    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-5,3.5,0),
        new THREE.Vector3(-2.5,4.0,0),
        new THREE.Vector3(-2.0,2.0,0),
        new THREE.Vector3(-.5, 1.0,0),
        new THREE.Vector3(1.5, 2.5,0),
        new THREE.Vector3(3.0, 2.0,0),
        new THREE.Vector3(4.5, 1.0,0),
        new THREE.Vector3(3.0, -1.5,0),
        new THREE.Vector3(2.0, -2.5,0),
        new THREE.Vector3(-.5, -3.0,0),
        new THREE.Vector3(-2.0, -4.0,0),
        new THREE.Vector3(-5.0, -3.0,0),
        new THREE.Vector3(-6.0, .5,0),
    ], true)

    const points = curve.getPoints(50)

    const sphere = useRef()
    const floating = useRef()
    const {coordinates} = useCursor()
    const {tema} = useTheme()

    let count = 0
    useFrame((state) => {
        // count += .001
        // if(count > 1){
        //     count = 0
        // }
        // const point = curve.getPointAt(count)
        // // console.log(point)
        // floating.current.position.x = point.x;
        // floating.current.position.y = point.y;
        const t = state.clock.getElapsedTime()
        sphere.current.position.y = (1 + Math.sin(t / 1.5))
        sphere.current.rotation.x = -coordinates.y/5
        sphere.current.rotation.y = -.8 + coordinates.x/2
    })


  return (
      <>
        <Blob 
            blobRef={sphere}
            theme={tema}
        />
        {/* <Path 
            floatingRef={floating}
        /> */}
      </>
  )
};

export default Scene;
