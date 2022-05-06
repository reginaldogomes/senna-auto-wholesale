import Link from 'next/link'
import { Title } from 'components/common/Title/Index'

const Index = () => {
    return (
        <>
            <div className="w-full flex flex-col flex-wrap">
                <section className="container m-auto">
                    <div className="flex mb-4 sm:flex-col">
                        <div className="w-1/2 py-5">
                            <img
                                src="images/sell-your-car-web.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt="..."
                            />
                        </div>
                        <div className="w-1/2 bg-white py-10 pt-8 px-8">
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
