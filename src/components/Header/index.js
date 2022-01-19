import React from 'react';
import {ReactComponent as Menu} from '../../assets/menu.svg'
import { useTheme } from '../../providers/useTheme';
import { Container } from './styles';

const Header = () => {

  const {changeTheme, tema} = useTheme()
  const handleClick = (e) => {
    e.preventDefault()
    changeTheme()
  }

  return (
      <Container>
          <ul>
              <li>
                  <a onClick={handleClick} href="#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke={tema === 'dark' ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 6H21" stroke={tema === 'dark' ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 18H21" stroke={tema === 'dark' ? 'white' : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </a>
              </li>
              <li>
                  <a onClick={handleClick} href="#">
                    {
                    tema === 'dark' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                  }
                  </a>
              </li>
          </ul>
      </Container>
  );
};

export default Header;
