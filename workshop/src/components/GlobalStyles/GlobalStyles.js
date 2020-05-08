import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body,
    div,
    span {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* GLOBAL STYLES */
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        line-height: 1.4;
        -webkit-font-smoothing: antialiased;
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    }
`

export default GlobalStyles;
