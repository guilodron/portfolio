import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import Blob from '../Blob';
import { useCursor } from '../../providers/useCursor';
import { useTheme } from '../../providers/useTheme';

const Scene = () => {

    const sphere = useRef()
    const {coordinates} = useCursor()
    const {tema} = useTheme()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()/2
        sphere.current.position.y = (1 + Math.sin(t / 1.5))/2
        sphere.current.rotation.x = -coordinates.y/5
        sphere.current.rotation.y = -.8 + coordinates.x/2
    })


  return (
      <>
        <Blob 
            blobRef={sphere}
            theme={tema}
        />
      </>
  )
};

export default Scene;
