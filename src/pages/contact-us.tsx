import type { NextPage } from 'next'
import { Title } from 'components/common/Title/Index'
import { ContactForm } from 'components/ContactForm/Index'

const ContactUs: NextPage = () => {
    return (
        <>
            <section className="container mx-auto">
                <Title title="Contact Us" />
                <ContactForm />
            </section>
        </>
    )
}

export default ContactUs
