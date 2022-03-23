import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
