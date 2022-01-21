import React from 'react';
import { Bar } from './styles';

const Transition = () => {
  return (
      <>
        <Bar style={{opacity: .2}} />
        <Bar style={{opacity: .4}} />
        <Bar style={{opacity: .6}} />
        <Bar style={{opacity: .8}} />
      </>
  );
};

export default Transition;
