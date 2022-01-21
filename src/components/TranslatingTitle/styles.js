import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 5vh;
    div {
        display: flex;
        h1 {
          font-size: 5rem;
          white-space: nowrap;
          margin-right: 5rem;
          -webkit-text-stroke: 1.4px ${(props) => props.theme.default};
          font-family: "Rubik";
          color: ${(props) => props.theme.background};
        }
    }
`;
