import React, {createContext, useContext, useEffect, useState} from 'react';
import CustomCursor from '../components/CustomCursor';

const CursorContext = createContext()

const CursorProvider = ({children}) => {

    const [mousePos, setMousePos] = useState({x: '0', y: '0'})
    const [coordinates, setCoordinates] = useState({x: 0, y: 0})
    const [state, setState] = useState('default')
    const [mobile, setMobile] = useState(false)
    

    const changeState = (newState) => {
        setState(newState)
    }

    const isMobile = () => {
        const ua = navigator.userAgent;
        return /Android|Mobi/i.test(ua);
      };

    useEffect(() => {
        if(!isMobile()){
            window.addEventListener('mousemove', (e) => {
                setMousePos({x: e.x, y: e.y})
                setCoordinates({
                    x: (e.pageX - window.innerWidth/2)/(window.innerWidth/2),
                    y: -(e.pageY - window.innerHeight/2)/(window.innerHeight/2)
                })
            })
    
            return window.removeEventListener('mousemove', (e) => {
                setMousePos({x: e.pageX, y: e.pageY})
                setCoordinates({
                    x: (e.pageX - window.innerWidth/2)/(window.innerWidth/2),
                    y: -(e.pageY - window.innerHeight/2)/(window.innerHeight/2)
                })
            })
        } else {
            setMobile(true)
        }
    }, [])
  return (
      <CursorContext.Provider value={{
          mousePos,
          coordinates,
          changeState
      }}>
          {!mobile && <CustomCursor state={state} position={mousePos} />}
          {children}
      </CursorContext.Provider>
  )
};

const useCursor = () => {
    const context = useContext(CursorContext);
    if (!context) {
      throw new Error("useAuth must be used within an CursorProvider");
    }
    return context;
  };
export {CursorProvider, useCursor, CursorContext};
