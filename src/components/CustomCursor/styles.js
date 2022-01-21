import styled from 'styled-components';

export const Container = styled.div`
    @keyframes spin {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
    pointer-events: none;
    position: fixed;
    transform: translate(-50%, -50%) scale(${props => props.state === 'default' ? 1 : .8});
    height: 40px;
    width: 40px;
    z-index: 10;
    transition: transform .3s;
    div {
        animation: spin 10s infinite linear;
        position: relative;
        height: 100%;

        span {
            position: absolute;
            margin: 0;
            padding: 0;
            top: 50%;
            left: 50%;
            font-size: 1rem;
            color: ${props => props.theme.default}
        }
    }
`;