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
            <div className={`flex-col justify-center items-center bg-white`}>
                <div className={`flex justify-center items-center py-10`}>
                    <main>{props.children}</main>
                </div>
            </div>
            <Footer />
        </>
    )
}
