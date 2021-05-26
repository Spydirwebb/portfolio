import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #000;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1.2rem;
}

body{
    background-color: var(--background-color);
}

`;

export default GlobalStyle;