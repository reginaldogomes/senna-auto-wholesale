import { HeadingPage } from 'components/Layout/HeadingPage'
import type { NextPage } from 'next'

const AboutUs: NextPage = () => {
    return (
        <>
            <HeadingPage title={'About Us'} />
            <div className="flex flex-col flex-wrap">
                <section className="container m-auto bg-white py-16">
                    <p>
                        We offer full range of garage services to vehicle owners
                        in Tucson. Our professionals know how to handle a wide
                        range of car services. Whether you drive a passenger car
                        or medium sized truck or SUV, our mechanics strive to
                        ensure that your vehicle will be performing at its best
                        before leaving our car shop. Whether you drive a medium
                        sized truck or passenger car or SUV, our mechanics
                        strive to ensure.
                    </p>
                </section>
            </div>
        </>
    )
}

export default AboutUs
