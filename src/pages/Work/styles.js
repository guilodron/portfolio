import styled from "styled-components";

export const Container = styled.section`
  height: 120vh;
  div {
    height: 100vh;
    width: 100vw;
    background-color: #181c1e;
    position: sticky;
    top: 0;
    overflow: hidden;
    div {
      /* width: 100%;
            height: 100%; */
      position: relative;
      display: flex;
      background-color: transparent;
      .title {
        position: absolute;
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;

        transform: translate(-30%, -25%) rotate(-25deg);
        h1 {
          color: #181c1e;
          -webkit-text-stroke: 1.11px ${(props) => props.theme.secondary};
          font-size: 5rem;
          margin-bottom: 25px;
          white-space: nowrap;
          @media (max-width: 1325px) {
            font-size: 3rem;
          }
          @media (max-width: 800px) {
            font-size: 2rem;
          }
        }
      }
      .navigation {
        flex: 1;
        background-color: transparent;
        width: 100%;
        max-width: 1400px;
        /* border: 1px solid blue; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        ul {
          list-style: none;
          li {
            margin-bottom: 1rem;
            a {
              font-size: 3.5rem;
              width: auto;
              color: white;
              @media (max-width: 1325px) {
                font-size: 3rem;
              }
              @media (max-width: 800px) {
                font-size: 2rem;
              }
            }
          }
        }
      }
      img {
        position: absolute;
        z-index: -1;
        width: 60vw;
        height: 100vh;
        object-fit: cover;
        right: 0;
      }
    }
  }
`;
