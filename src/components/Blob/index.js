import { MeshWobbleMaterial, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";

import {a, useSpring} from '@react-spring/three'

const Blob = ({blobRef, theme}) => {

    const Wobble = a(MeshWobbleMaterial)
    const AnimatedSphere = a(Sphere)

    const [hovered, setHovered] = useState(false)
    const [ready, setReady] = useState(false)
    useEffect(() => {
      setReady(true)
    }, [])

    const animations = useSpring({
        factor: hovered ? 1 : 0,
        color: theme === 'dark' ? 'blue' : 'white',
      })
      
      const slow = useSpring({
      pos: ready ? 15 : 30,
      scale: ready ? 1 : .3,
      config: {
        // duration: 1000,
        tension: 30,
        
      }
    })

    return (
        <AnimatedSphere
          position={[15,0,0]} 
          args={[15,20,16]}
          position-x={slow.pos}
          // scale={slow.scale}
          ref={blobRef}
          onPointerEnter={() => {
              setHovered(true)
          }}
          onPointerLeave={() => {
              setHovered(false)
          }}
        >
          <Wobble
            attach='material'
            color={animations.color}
            metalness={1}
            roughness={.30}
            factor={.2}
            speed={1.5}
            clipShadows    
          />
          <spotLight position={[20, 0, 42]} intensity={.6} />
          <spotLight castShadow position={[-20, 0, 40]} intensity={.6} />
        </AnimatedSphere>
    );
  };

export default Blob;