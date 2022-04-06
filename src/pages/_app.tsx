import type { AppProps } from 'next/app'
import MainContainer from 'components/Layout/MainContainer'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <MainContainer title="Senna Auto Wholesale">
            <Component {...pageProps} />
        </MainContainer>
    )
}

export default App
