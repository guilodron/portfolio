import React, { useState } from 'react';
import { Container, Timeline, Images, Pane } from './styles';
import { useCursor } from '../../providers/useCursor';
import TranslatingTitle from '../../components/TranslatingTitle';
import TimelineItem from '../../components/TimelineItem';
import experience from './experience';

import CJF from '../../assets/journey/cjf.jpg'
import CJF2 from '../../assets/journey/cjf2.jpg'
import TJ from '../../assets/journey/tj.jpg'
import TJ2 from '../../assets/journey/tj2.png'
import UNB from '../../assets/journey/unb.jpg'
import UNB2 from '../../assets/journey/unb2.png'
import STRUCT from '../../assets/journey/struct.jpeg'
import STRUCT2 from '../../assets/journey/struct2.png'
import BSB from '../../assets/journey/brasilia.jpg'
import OFFICE from '../../assets/journey/office.jpg'
import { AnimatePresence, motion } from 'framer-motion';

const Journey = () => {

  const images = {
    default: [BSB, OFFICE],
    cjf: [CJF, CJF2],
    unb: [UNB, UNB2],
    tj: [TJ, TJ2 ],
    struct: [STRUCT, STRUCT2 ],
  }
  const [selectedImage, setSelectedImage] = useState('default')
  const {coordinates, changeState} = useCursor()

  return (
    <Container >
      <TranslatingTitle />
      <Pane>
        <Images
          onPointerEnter={() => changeState('look')}
          onPointerLeave={() => changeState('default')}
        >
          <AnimatePresence>
            <motion.img
              whileHover={{filter: 'grayscale(0%)', zIndex:2}}
              exit={{opacity: 0}}
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              src={images[selectedImage][0]}
              key={images[selectedImage]}
              style={{
                transform: `translateX(${50 + -coordinates.x * 7}%) translateY(${coordinates.y * 7}%)`
              }}
              alt="picture ilustrating timeline" 
            />
            <motion.img
              whileHover={{filter: 'grayscale(0%)'}}
              exit={{opacity: 0}}
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              src={images[selectedImage][1]}
              key={images[`${selectedImage+1}`]}
              style={{
                transform: `translateY(${50 + coordinates.y * 3}%) translateX(${-30 + coordinates.x * 1}%)`,
              }}
              alt="picture ilustrating timeline" 
            />
          </AnimatePresence>
        </Images>
        <Timeline>
            {experience.map((item, index) => (
                <TimelineItem 
                  key={index}
                  date={item.date}
                  description={item.description}
                  onPointerEnter={() => setSelectedImage(item.select)}
                />
            ))}
        </Timeline>
      </Pane>
    </Container>
    );
};

export default Journey;
