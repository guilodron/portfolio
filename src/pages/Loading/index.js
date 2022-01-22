import React, { useEffect, useState } from 'react';
import { Container } from './styles';

const Loading = ({setLoaded}) => {
    const [loading, setLoading] = useState(0)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(loading+1)
        }, 35)
        if(loading >= 100){
            setLoaded(true)
            clearTimeout(timeout)
        }
        // return clearTimeout(timeout)
    },[loading, setLoaded])
  return (    
    <Container>
        <h1>{loading}%</h1>
    </Container>
    );
};

export default Loading;
