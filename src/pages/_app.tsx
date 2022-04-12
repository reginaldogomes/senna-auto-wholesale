import type { AppProps } from 'next/app'
import '../styles/global.css'
import MainContainer from 'components/Layout/MainContainer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee)

function App({ Component, pageProps }: AppProps) {
    return (
        <MainContainer title="Senna Auto Wholesale">
            <Component {...pageProps} />
        </MainContainer>
    )
}

export default App
