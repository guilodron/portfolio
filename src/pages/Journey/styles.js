import styled from "styled-components";

export const Container = styled.section`
      overflow-x: hidden;
  div {
    display: flex;
    h1 {
        font-size: 5rem;
        white-space: nowrap;
        margin-right: 5rem;
        -webkit-text-stroke: 1.4px ${props => props.theme.default};
        font-family: 'Rubik';
        color: ${props => props.theme.background};
    }
  }
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 0 5vw; */
    /* align-items: center; */
    flex: 1;
    div {
        display: flex;
        align-items: flex-end;
        /* margin-left: 50%; */
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            span {
                white-space: nowrap;
                font-family: 'Rubik';
            }
        }
    }
`;

export const Pane = styled.div`
    display: flex;
`;

export const Images = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    img {
        height: 200px;
        position: absolute;
        filter: grayscale(60%);
    }
`;

