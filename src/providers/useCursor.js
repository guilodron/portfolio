import React, {createContext, useContext, useEffect, useState} from 'react';

const CursorContext = createContext()

const CursorProvider = ({children}) => {

    const [mousePos, setMousePos] = useState({x: 0, y: 0})
    const [coordinates, setCoordinates] = useState({x: 0, y: 0})
    const handleMove = (e) => {
        // setMousePos({x: e.pageX, y: e.pageY})
        // console.log({
        //     x: e.pageX - window.innerWidth/2,
        //     y: e.pageY - window.innerHeight/2,
        // })
        console.log('ok')
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setMousePos({x: e.pageX, y: e.pageY})
            setCoordinates({
                x: (e.pageX - window.innerWidth/2)/(window.innerWidth/2),
                y: -(e.pageY - window.innerHeight/2)/(window.innerHeight/2)
            })
        })

        return window.removeEventListener('mousemove', handleMove)
    }, [])
  return (
      <CursorContext.Provider value={{
          mousePos,
          coordinates
      }}>
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
