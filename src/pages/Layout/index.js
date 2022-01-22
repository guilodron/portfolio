import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import CoisasThree from '../../components/CoisasThree';
import Header from '../../components/Header';
import Transition from '../../components/Transition';
import Contact from '../Contact';
import Journey from '../Journey';
import Landing from '../Landing';
import Work from '../Work';

const Loader = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-size: 5rem;
    }
`

const Layout = () => {
  return (
      <>
          <Loader
            animate={{top: '-100%', height: 0}}
            transition={{ease: 'linear', delay: 1}}
          >
              <motion.h1 style={{color: 'white'}} transition={{delay: .5}} animate={{opacity: 0}}>100%</motion.h1>
          </Loader>
          <CoisasThree />
          <Header />
          <Landing />
          <Journey />
          <Transition />
          <Work />
          <Contact />
      </>
  );
};

export default Layout;
