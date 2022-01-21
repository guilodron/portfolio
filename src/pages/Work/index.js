import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Container } from './styles';
import {useCursor} from '../../providers/useCursor'

const images = [
    {
        id: 0,
        path: 'folio',
        call: 'Portfolio',
        ref: 'https://guilodron.github.io/threejs-landing-portfolio/'
    },
    {
        id: 1,
        path: 'artzy',
        call: 'Artzy',
        ref: 'https://guilodron.github.io/artzy/'
    },
    {
        id: 2,
        path: 'daniela',
        call: 'Daniela Mota',
        ref: 'https://daniela-mota.vercel.app/'
    },
    {
        id: 3,
        path: 'traineedex',
        call: 'TraineeDex',
        ref:'https://guilodron.github.io/TraineeDex/'

    },
]

const Work = () => {

    const [featured, setFeatured] = useState(undefined)
    const {changeState, setColor} = useCursor()

  return (
    <Container
        onPointerEnter={() => setColor('white')}
        onPointerLeave={() => setColor('default')}
    >
        <div>
            <div>
                <div className='title'>
                    <h1>WORK WORK WORK WORK</h1>
                    <h1>WORK WORK WORK WORK</h1>
                    <h1>WORK WORK WORK WORK</h1>
                </div>
                <div className='navigation'>
                    <ul>
                        {images.map(item => (
                            <li  
                                onPointerEnter={() => {
                                    changeState('clickable')
                                    setFeatured({path: item.path, key: item.id})
                                }}
                                onPointerLeave={() => {
                                    changeState('default')
                                    setFeatured(undefined)
                                }}
                                key={item.id}
                            >
                                <a target='_blank' disabled href={item.ref} rel="noreferrer">{item.call}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <AnimatePresence>
                    {featured && 
                        <motion.img 
                            className='featured' 
                            key={featured.key} 
                            src={require(`../../assets/work/${featured.path}.png`)} 
                            alt="project" 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        />}
                </AnimatePresence>
            </div>
        </div>

    </Container>
)};

export default Work;
