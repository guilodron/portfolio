import React from 'react';
import ScrollIndicator from './ScrollIndicator';
import { Container } from './styles';


const Landing = () => {
  return (
      <Container>          
          <div>
            <h1>HI, I'M</h1>
            <h1>GUILHERME</h1>
            <h2>MOBILE AND WEB DEVELOPER</h2>
          </div>
          <ScrollIndicator />
      </Container>
  );
};

export default Landing;
