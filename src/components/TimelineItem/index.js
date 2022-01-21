import React from 'react';
import { Container } from './styles';

const TimelineItem = ({date, description, ...props}) => {

    const variants ={
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
                duration: .5
            }
        }
    }

  return (
    <Container
        variants={variants}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{once: 'true'}}
    >
        <svg width="25" height="224" viewBox="0 0 25 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className='inner' cx="12.5" cy="211.5" r="10.5" stroke="black" strokeWidth="4"/>
            <line className='inner' x1="12.5" x2="12.5" y2="200" stroke="black" strokeWidth="3"/>
        </svg>
        <div 
            {...props}
        >
            <b>{date}</b>
            <span>{description}</span>
        </div>
    </Container>
    );
};

export default TimelineItem;
