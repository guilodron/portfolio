import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styles';

const cursorText = {
    'default': ' HAVE FUN HAVE FUN HAVE FUN ',
    'clickable': ' CLICK ME! CLICK ME! CLICK ME! ',
    'scroll': ' SCROLL SCROLL SCROLL ',
}


const CustomCursor = ({position, state}) => {

    const [letterCircle, setLetterCircle]= useState([])
    const ref = useRef()
    useEffect(() => {
        const split = cursorText[state].split('')
        const count = 360 / split.length
        const result = split.map((letter, index) => (
            <span key={index} style={{transform: `translate(-50%, -50%) rotate(${count * index}deg) translate(60px) rotate(90deg)`}} >{letter}</span>
        ))
        setLetterCircle(result)
    }, [state])

    return (
        <Container 
            style={{
                top: position.y, 
                left: position.x,
            }}
            ref={ref}
            state={state}
        >
            <div>
                {letterCircle}                
            </div>            
        </Container>
    );
};

export default CustomCursor;