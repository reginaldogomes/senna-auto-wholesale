import { Slide } from 'components/common/Slide/Index'

const Index = () => {
    return (
        <>
            <Slide />
            <div className="flex flex-col flex-wrap">
                <section className="container m-auto bg-gray-300 py-16">
                    <h1>seção 1</h1>
                </section>
                <section className="container m-auto bg-gray-200 py-24">
                    <h1>seção 2</h1>
                </section>
                <section className="container m-auto bg-gray-100 py-60">
                    <h1>seção 3</h1>
                </section>
            </div>
        </>
    )
}

export default Index
