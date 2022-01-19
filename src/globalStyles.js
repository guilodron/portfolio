import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body,
    #root {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.background};
        font-family: 'Rubik Mono One', sans-serif;
    }
`;
