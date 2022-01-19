import React from 'react';
import { Container } from './styles';
import {ReactComponent as Down} from '../../../assets/down.svg';
import { useTheme } from '../../../providers/useTheme';


const ScrollIndicator = () => {

  const {tema} = useTheme()

  return (
      <Container>
          <div className='wrapper'>
            <div />
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 18.75L25 31.25L37.5 18.75" stroke={tema === 'dark' ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
      </Container>
  );
};

export default ScrollIndicator;
