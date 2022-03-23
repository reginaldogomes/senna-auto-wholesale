import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        box-sizing: border-box;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
    }
`

export default GlobalStyle
