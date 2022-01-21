import { motion } from 'framer-motion';
import React from 'react';
import { useCursor } from '../../providers/useCursor';
import { useTheme } from '../../providers/useTheme';
import { Container } from './styles';

const Header = () => {

  const {changeTheme, tema} = useTheme()
  const {changeState} = useCursor()
  const handleClick = (e) => {
    e.preventDefault()
    changeTheme()
  }

  return (
      <Container>
          <ul>
              <motion.li
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 3.2}}
              >
                  <a 
                    onPointerEnter={() => {changeState('clickable')}} 
                    onPointerLeave={() => {changeState('default')}} 
                    onClick={handleClick} 
                    href="."
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12H21" stroke={tema === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 6H21" stroke={tema === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 18H21" stroke={tema === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
              </motion.li>
              <motion.li
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{delay: 3.8}}
              >
                  <a
                    onPointerEnter={() => {changeState('clickable')}} 
                    onPointerLeave={() => {changeState('default')}} 
                    onClick={handleClick} 
                    href="."
                  >
                    {
                    tema === 'dark' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  }
                  </a>
              </motion.li>
          </ul>
      </Container>
  );
};

export default Header;
