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
            <main className={`container mx-auto`}>{props.children}</main>
            <Footer />
        </>
    )
}
