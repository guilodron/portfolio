import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    display: flex;
    align-items: flex-end;
    svg {
        .inner {
            stroke: ${props => props.theme.default};
            transition: 2s;
            &:hover{
                fill: blue;
            }
        }
    }
    div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        color: ${props => props.theme.default};
        b {
            font-size: 1.5rem;
            /* -webkit-text-stroke: 1px ${(props) => props.theme.default}; */
            
        }
        span {
            font-family: 'Rubik';
            font-size: 1.3rem;
            @media (max-width: 1325px) {
                font-size: 1.1rem;
            }
            @media (max-width: 800px) {
                font-size: 1rem;
            }
        }
    }
`;