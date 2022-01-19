import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100%;
  max-width: 1000px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: 10; */
  padding: 0 7rem;
  position: relative;
  @media (max-width: 1325px) {
    padding: 0 4rem;
  }
  @media (max-width: 800px) {
    padding: 0 2rem;
  }

  div {
    align-self: flex-start;
  }
  h1 {
    color: ${props => props.theme.default};
    font-size: 4rem;
    margin: 0;
    /* text-shadow: 8px 4px 4px #1919a8; */
    @media (max-width: 1325px) {
      font-size: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  h1 + h1 {
    ${props => props.theme.stroke}
    font-size: 5rem;
    /* -webkit-text-stroke: 1.11px #0000d2; */
    color: ${props => props.theme.accent};
    text-shadow: none;
    @media (max-width: 1325px) {
      font-size: 4rem;
    }
    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${props => props.theme.default};
    @media (max-width: 1325px) {
      font-size: 1rem;
    }
    @media (max-width: 800px) {
      font-size: 0.75rem;
    }
  }
`;
