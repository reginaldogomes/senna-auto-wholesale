import type { NextPage } from 'next'

import { HeadingPage } from 'components/Layout/HeadingPage'
import { SellForm } from 'components/SellForm/SellForm'

const Sell: NextPage = () => {
    return (
        <>
            <HeadingPage title={'Sell'} />{' '}
            <div className="flex flex-col flex-wrap">
                <section className="container m-auto bg-gray-300 py-16">
                    <SellForm />
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

export default Sell
