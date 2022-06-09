import Link from 'next/link'
import { Title } from 'components/common/Title/Index'
import { FaWhatsapp } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Index = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap">
                <section className="container m-auto">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="lg:w-1/2 py-5">
                            <img
                                src="images/sell-your-car-web.jpg"
                                className="max-w-full h-auto rounded-lg"
                                alt="..."
                            />
                        </div>
                        <div className="bg-white pt-8 px-8">
                            <h1 className="text-5xl text-center text-blue lg:text-7xl lg:text-left">
                                Sell <strong>your</strong> car
                            </h1>
                            <h2 className="text-2xl text-center text-blue lg:text-4xl lg:text-left pt-4">
                                Get an <strong>instant</strong> offer on your
                                <strong> car</strong>
                            </h2>
                            <Link href="/sell">
                                <a className="inline-block w-full lg:max-w-xs text-center mt-5 px-7 py-3 bg-yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    appraisal
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="container m-auto text-blue bg-yellow bg-opacity-5 p-6">
                    <Title title="About Us" />
                    <p className="mt-5 sm:text-center">
                        The British Columbia Most Trusted Auto Wholesaler
                    </p>
                    <p className="mt-5 sm:text-center">
                        No one likes to waste time and energy on any
                        transaction. After all, time really is money when it
                        comes to selling your vehicle at the fairest price
                        possible. That’s why Senna Auto Wholesale is so driven
                        to deliver top-notch customer service for every
                        automobile we purchase—from luxury or exotic cars to
                        middle-market vehicles.
                    </p>
                    <p className="mt-5 sm:text-center">
                        As a British Columbia licensed, insured automobile
                        wholesaler, Senna Auto Wholesale guarantees a fair and
                        smooth transaction every time, with knowledgeable
                        professionals who are driven to deliver superior
                        customer service. Our reputation is built on it.
                    </p>
                </section>
                <section className="container m-auto bg-yellow bg-opacity-5 p-6 mt-10">
                    <ul className="flex flex-wrap shrink lg:flex-nowrap">
                        <li className="w-full bg-yellow bg-opacity-7 m-2 rounded p-10">
                            <FaWhatsapp className="m-auto text-7xl text-blue" />
                            <a
                                href="https://api.whatsapp.com/send?phone=16045007794&text=Ol%C3%A1%20seja%20bem%20vindo"
                                className="m-auto text-base text-blue text-center block mt-5"
                            >
                                +1(604)5007794
                            </a>
                        </li>
                        <li className="w-full bg-yellow bg-opacity-7 m-2 rounded p-10">
                            <FiMail className="m-auto text-7xl text-blue" />
                            <span className="m-auto text-base text-blue text-center block mt-5">
                                sales@sennaautowholesale.com
                            </span>
                        </li>
                        <li className="w-full bg-yellow bg-opacity-7 m-2 rounded p-10">
                            <FaPhone className="m-auto text-7xl text-blue" />
                            <span className="m-auto text-base text-blue text-center block mt-5">
                                +1(604)5007794
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Index
