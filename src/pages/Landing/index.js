import React from "react";
import ScrollIndicator from "./ScrollIndicator";
import { Container, AnimatedContainer } from "./styles";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Landing = () => {
  const { scrollY } = useViewportScroll();
  const offset = useTransform(scrollY, [0, 500], [0, 200]);

  return (
      <Container
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{delay: 1}}
      >
        <motion.div className="sub-container" style={{ y: offset }}>
          <AnimatedContainer>
              <motion.div 
                animate={{top: '100%'}}
                transition={{
                  duration: .8,
                  delay: 1.6
                }}
              />
              <h1>HI, I'M</h1>
          </AnimatedContainer>
          <AnimatedContainer>
            <motion.div 
              animate={{top: '100%'}}
              transition={{
                duration: .8,
                delay: 1.8
              }}
            />
            <h1 className="hero">GUILHERME</h1>
          </AnimatedContainer>
          <AnimatedContainer>
            <motion.div 
              animate={{top: '100%'}}
              transition={{
                duration: .8,
                delay: 2
              }}
            />
            <h2>MOBILE AND WEB DEVELOPER</h2>
          </AnimatedContainer>        
        </motion.div>
        <ScrollIndicator />
      </Container>
  );
};

export default Landing;
