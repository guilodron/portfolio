import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body,
    #root {
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: ${props => props.theme.background};
        font-family: 'Rubik Mono One', sans-serif;
        overflow-x: hidden;
    }
`;
