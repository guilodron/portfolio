import { motion } from 'framer-motion';
import React from 'react';
import { useCursor } from '../../providers/useCursor';
import { useTheme } from '../../providers/useTheme';
import { Container } from './styles';
import {FiSun, FiMoon, FiMenu} from 'react-icons/fi'

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
              {/* <motion.li
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
                    <FiMenu color={tema === 'dark' ? 'white' : 'black'} size={24}/>
                  </a>
              </motion.li> */}
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
                    <FiMoon size={24} color='white'/>
                    : <FiSun size={24} color='black' />
                  }
                  </a>
              </motion.li>
          </ul>
      </Container>
  );
};

export default Header;
