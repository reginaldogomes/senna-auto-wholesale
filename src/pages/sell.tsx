import type { NextPage } from 'next'

import { HeadingPage } from 'components/Layout/HeadingPage'
import { SellForm } from 'components/SellForm/SellForm'

const Sell: NextPage = () => {
    return (
        <>
            <HeadingPage title={'Sell'} />
            <div className="flex flex-col flex-wrap">
                <section className="container m-auto py-16">
                    <SellForm />
                </section>
            </div>
        </>
    )
}

export default Sell
