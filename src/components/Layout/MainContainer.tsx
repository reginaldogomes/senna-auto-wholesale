import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
    title: string
    children: React.ReactNode
}

export default function MainContainer(props: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className={`container mx-auto`}>{props.children}</main>
            <Footer />
        </div>
    )
}
