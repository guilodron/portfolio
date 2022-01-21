import styled from "styled-components";

export const Container = styled.section`
      overflow-x: hidden;
      margin-bottom: 20vh;

`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Pane = styled.div`
    display: flex;
    @media (max-width: 1170px) {
      padding: 0 4rem;
    }
`;

export const Images = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    @media (max-width: 1170px) {
      display: none;
    }
    img {
        width: 300px;
        max-height: 40%;
        object-fit: contain;
        position: absolute;
        filter: grayscale(100%);
        transition: filter .2s;
    }
`;

