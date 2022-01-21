import { motion, useElementScroll, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Container, Timeline, Images, Pane } from './styles';
import Bsb from '../../assets/brasilia.jpg'
import Office from '../../assets/office.jpg'
import Study from '../../assets/study.jpg'
import { useCursor } from '../../providers/useCursor';

const Journey = () => {
  const element = useRef(null)
  const {scrollYProgress} = useViewportScroll()
  const offset = useTransform(scrollYProgress, [0, 1], [-100, -500])
  const offset2 = useTransform(scrollYProgress, [0, 1], [-500, 100])
  
  const {coordinates} = useCursor()
  useEffect(() => {
    // console.log(coordinates)
  }, [coordinates])

  return (
    <Container >
      <motion.div 
        ref={element}
        style={{
          translateX: offset
        }}
      >
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
      </motion.div>
      <motion.div 
        ref={element}
        style={{
          translateX: offset2
        }}
      >
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
        <h1>MY JOURNEY</h1>
      </motion.div>
      <Pane>
        <Images>
          <img 
            src={Office}
            style={{
              transform: `translateX(${50 + -coordinates.x * 7}%) translateY(${coordinates.y * 7}%)`
            }}
            alt="" 
            srcset="" 
          />
          <img 
            src={Study}
            style={{
              transform: `translateY(${50 + coordinates.y * 3}%) translateX(${-30 + coordinates.x * 1}%)`,

            }}
            alt="" 
            srcset="" 
          />
        </Images>
        <Timeline>
          <div>
            <svg width="25" height="192" viewBox="0 0 25 192" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="179.5" r="10.5" stroke="black" stroke-width="4"/>
              <line x1="12.5" x2="12.5" y2="170" stroke="black" stroke-width="3"/>
            </svg>
            <div>
              <span>2020-2021</span>
              <span>Bacharel em engenhrai da computacao</span>
            </div>
          </div>
          <div>
            <svg width="25" height="192" viewBox="0 0 25 192" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="179.5" r="10.5" stroke="black" stroke-width="4"/>
              <line x1="12.5" x2="12.5" y2="170" stroke="black" stroke-width="3"/>
            </svg>
            <div>
              <span>2020-2021</span>
              <span>Bacharel em engenhrai da computacao</span>
            </div>
          </div>
          <div>
            <svg width="25" height="192" viewBox="0 0 25 192" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="179.5" r="10.5" stroke="black" stroke-width="4"/>
              <line x1="12.5" x2="12.5" y2="170" stroke="black" stroke-width="3"/>
            </svg>
            <div>
              <span>2020-2021</span>
              <span>Bacharel em engenhrai da computacao</span>
            </div>
          </div>
        </Timeline>

      </Pane>
    </Container>
    );
};

export default Journey;
