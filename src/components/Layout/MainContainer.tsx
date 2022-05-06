import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
    title: string
    children: React.ReactNode
}

export default function MainContainer(props: LayoutProps) {
    return (
        <>
            <Header />

            <main
                className={`max-w-7xl mx-auto flex-col justify-center items-center w`}
            >
                {props.children}
            </main>

            <Footer />
        </>
    )
}
