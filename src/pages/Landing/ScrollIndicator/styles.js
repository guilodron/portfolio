import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    display: flex;
    /* align-self: center; */
    justify-content: center;
    bottom: 4rem;
    margin: 0 auto;
    .wrapper {
        position: relative;
        height: 4rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20vh;
        justify-self: flex-end;

    }

    @keyframes radiate{
        from {
            opacity: 1;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(1.5);
        }
    }

    .wrapper div {
        position: absolute;
        height: 4rem;
        width: 4rem;
        border: 1px solid ${props => props.theme.default};
        border-radius: 50%;
        animation: radiate 4s infinite;
    }
    svg {
        height: 2rem;
        width: 2rem;
    }
`;