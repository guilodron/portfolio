import React, { useState } from 'react';
import { Container } from './styles';
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi'
import { useCursor } from '../../providers/useCursor';
import { motion } from 'framer-motion';

const Contact = () => {
    const {setColor, changeState} = useCursor()
    const [animate, setAnimate] = useState(false)
    const text = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: .5,
                staggerChildren: .5
            }
        }
    }

    const item = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1
        }
    }
  return (
      <Container
        onPointerEnter={() => {
            setColor('white')
            changeState('shy')
        }}
        onPointerLeave={() => {setColor('default')}}
      >
          <motion.div
            variants={text}
            // whileInView={'visible'}
            onViewportEnter={() => setAnimate(true)}
            animate={animate ? 'visible' : 'hidden'}
            initial='hidden'
          >
                <h1>Say Hi</h1>
                <p>guilodron7@gmail.com</p>
                <motion.div
                    variants={item}            
                    onPointerEnter={() => {changeState('clickable')}}
                    onPointerLeave={() => {changeState('shy')}}
                    style={{top: '30%', left: '20%'}}
                >
                    <div>
                        <div></div>
                        <a target={'_blank'} href="https://github.com/guilodron" rel="noreferrer">
                            <FiGithub />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    variants={item} 
                    onPointerEnter={() => {changeState('clickable')}}
                    onPointerLeave={() => {changeState('shy')}}
                    style={{top: '20%', left: '70%'}}
                >
                    <div>
                        <div></div>
                        <a target='_blank' href="https://www.linkedin.com/in/guilherme-rodrigues-lodron-pires-14ab18189/" rel="noreferrer">
                            <FiLinkedin />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    variants={item} 
                    onPointerEnter={() => {changeState('clickable')}}
                    onPointerLeave={() => {changeState('shy')}}
                    style={{top: '70%', left: '70%'}}
                >
                    <div>
                        <div></div>
                        <a target='_blank' href="mailto:guilodron7@gmail.com" rel="noreferrer">
                            <FiMail />
                        </a>
                    </div>
                </motion.div>
          </motion.div>
      </Container>
  );
};

export default Contact;
