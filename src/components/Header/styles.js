import styled from 'styled-components'

export const Container = styled.header`
    position: absolute;
    top: 5vh;
    left: 6vw;
    z-index: 10;
    /* width: 100%; */

    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        li {
            margin-right: 5rem;
        }
    }
`;