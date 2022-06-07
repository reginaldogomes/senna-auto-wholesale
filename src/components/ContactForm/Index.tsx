import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { Button } from 'components/common/Button/Index'

type UserSubmitForm = {
    name: string
    email: string
    message: string
}

export const ContactForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Full name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        message: Yup.string()
            .required('Message is required')
            .min(6, 'Message must be at least 6 characters')
            .max(200, 'Message must not exceed 200 characters')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2))
    }
    return (
        <div className="flex flex-col max-w-5xl m-auto">
            <h3 className="text-2xl text-blue text-center">
                <strong>Submit a question</strong>
            </h3>
            <p className="text-blue mt-4 text-center">
                If you can’t find what you need, please submit a question
                <br />
                through our contact form below {'&'} we’ll get back to you as
                soon as possible.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-yellow bg-opacity-5 py-10 mt-10 rounded-lg p-10"
                noValidate
            >
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Full name
                        </span>
                        <input
                            type="text"
                            className={`form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                                errors.name ? 'text-red border-red' : ''
                            }`}
                            {...register('name')}
                        ></input>
                        <div className="text-red">{errors.name?.message}</div>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Email
                        </span>
                        <input
                            type="email"
                            className={`form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                                errors.email ? 'text-red border-red' : ''
                            }`}
                            {...register('email')}
                        ></input>
                        <div className="text-red">{errors.email?.message}</div>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Message
                        </span>
                        <textarea
                            rows={6}
                            className={`form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${
                                errors.message ? 'text-red border-red' : ''
                            }`}
                            {...register('message')}
                        ></textarea>
                        <div className="text-red">
                            {errors.message?.message}
                        </div>
                    </label>
                </div>
                <Button title="Send Message" state={!errors} />
            </form>
        </div>
    )
}
