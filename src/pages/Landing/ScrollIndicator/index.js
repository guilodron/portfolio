import React from 'react';
import { Container } from './styles';
import { useTheme } from '../../../providers/useTheme';
import { useCursor } from '../../../providers/useCursor';
import {FiChevronDown} from 'react-icons/fi'


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
            <FiChevronDown color={tema === 'dark' ? 'white' : 'black'} size={50} />
          </div>
      </Container>
  );
};

export default ScrollIndicator;
