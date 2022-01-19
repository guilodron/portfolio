import React, {createContext, useContext, useEffect, useState} from 'react';
import { ThemeProvider } from 'styled-components';
import {darkTheme, lightTheme} from '../theme'

const ThemeContext = createContext()

const ThemeProviderReact = ({children}) => {

    const [tema, setTheme] = useState('light')
    const changeTheme = (e) => {
        setTheme(tema === 'dark' ? 'light' : 'dark')
    }

  return (
      <ThemeContext.Provider value={{
          changeTheme,
          tema
      }}>
          <ThemeProvider theme={tema==='dark' ? darkTheme : lightTheme}>
            {children}
          </ThemeProvider>
      </ThemeContext.Provider>
  )
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useAuth must be used within an CursorProvider");
    }
    return context;
  };
export {ThemeProviderReact, useTheme, ThemeContext};
