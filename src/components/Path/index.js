import { Sphere } from '@react-three/drei';
import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three'

const Path = ({floatingRef}) => {

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
    const ref = useRef()

    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints(points)
    }, [points])

    return (
        <mesh position={[0,0,15]}>
            <line overlineThickness={5} ref={ref}>
                <bufferGeometry />
                <lineBasicMaterial color={'hotpink'} />
            </line>
            <Sphere
                ref={floatingRef}
                args={[.5, 16,32]}
            >
                <meshStandardMaterial 
                    color={'blue'}
                    metalness={1}
                    roughness={.1}
                />
                {/* <directionalLight position={[0,0,10]} /> */}
                <ambientLight intensity={1} />
            </Sphere>
        </mesh>
    );
};

export default Path;
