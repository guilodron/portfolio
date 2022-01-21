import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../../providers/useTheme';
import { useCursor } from '../../../providers/useCursor';


const ScrollIndicator = () => {

  const {tema} = useTheme()
  const {changeState} = useCursor()

  return (
      <Container
        onPointerEnter={() => changeState('scroll')}
        onPointerLeave={() => changeState('default')}
      >
          <div className='wrapper'>
            <div />
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 18.75L25 31.25L37.5 18.75" stroke={tema === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
      </Container>
  );
};

export default ScrollIndicator;
