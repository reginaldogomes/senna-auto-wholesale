import type { AppProps } from 'next/app'
import '../styles/global.css'
import MainContainer from 'components/Layout/MainContainer'

function App({ Component, pageProps }: AppProps) {
    return (
        <MainContainer title="Senna Auto Wholesale">
            <Component {...pageProps} />
        </MainContainer>
    )
}

export default App
