import { Title } from 'components/common/Title/Index'

const Index = () => {
    return (
        <>
            <div className="w-full flex flex-col flex-wrap">
                <section className="container m-auto py-16">
                    <div className="flex mb-4">
                        <div className="w-1/2 bg-gray-400 h-12"></div>
                        <div className="w-1/2 bg-gray-500 h-12"></div>
                    </div>
                </section>
                <section className="container m-auto bg-gray-200 py-24">
                    <Title title="About Us" />
                </section>
                <section className="container m-auto bg-gray-100 py-60">
                    <h1>seção 3</h1>
                </section>
            </div>
        </>
    )
}

export default Index
