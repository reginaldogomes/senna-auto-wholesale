import Link from 'next/link'
import { Title } from 'components/common/Title/Index'

const Index = () => {
    return (
        <>
            <div className="w-full flex flex-col flex-wrap">
                <section className="container m-auto">
                    <div className="container flex flex-wrap lg:flex-nowrap mb-4">
                        <div className="lg:w-1/2 py-5">
                            <img
                                src="images/sell-your-car-web.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt="..."
                            />
                        </div>
                        <div className="bg-white pt-8 px-8">
                            <h1 className="text-7xl text-blue">
                                Sell <strong>your</strong> car
                            </h1>
                            <h2 className="text-4xl text-blue pt-4">
                                <strong>Get</strong> a free
                                <strong> appraisal</strong> in minutes
                            </h2>
                            <Link href="/sell">
                                <a className="inline-block mt-5 px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    appraisal
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="container m-auto py-24">
                    <Title title="About Us" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
                <section className="container m-auto bg-gray-100 py-60">
                    <h1>seção 3</h1>
                </section>
            </div>
        </>
    )
}

export default Index
