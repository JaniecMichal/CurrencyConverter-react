import { createGlobalStyle } from "styled-components";
import backgroundImage from "./images/background-image.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position:center;
        color: #000;
        font-family: 'Open Sans', sans-serif;
    }
`;