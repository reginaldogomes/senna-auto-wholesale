import type { NextPage } from 'next'
import { Title } from 'components/common/Title/Index'
import { SellForm } from 'components/SellForm/SellForm'

const Sell: NextPage = () => {
    return (
        <>
            <div className="flex flex-row">
                <section className="container m-auto">
                    <Title title="Sell Your Car" />
                    <SellForm />
                </section>
            </div>
        </>
    )
}

export default Sell
