import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #181c1e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div {
        h1 {
            -webkit-text-stroke: 1.11px ${(props) => props.theme.secondary};
            color: #181c1e;
            font-size: 6rem;
            @media (max-width: 1325px) {
            font-size: 4rem;
            }
            @media (max-width: 800px) {
            font-size: 2.5rem;
            }
        }
        p {
            color: white;
            font-family: 'Rubik';
            font-size: 3rem;
            font-weight: bold;
            @media (max-width: 1325px) {
            font-size: 2rem;
            }
            @media (max-width: 800px) {
            font-size: 1.5rem;
            }
        }
        
        div {
            position: absolute;
            &:hover {
                div div {
                    height: 600%;
                    width: 600%;
                }
            }
            div {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 3rem;
                height: 3rem;
                div {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    border-radius: 50%;
                    border: 2px solid ${props => props.theme.secondary};
                    pointer-events: none;
                    transition: .5s;
                }
                a {
                    font-size: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: ${props => props.theme.secondary}
                }
            }
        }
        
    }
`;