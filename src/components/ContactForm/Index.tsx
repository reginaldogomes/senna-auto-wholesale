import { useState } from 'react'
import { Button } from 'components/common/Button/Index'

export const ContactForm = () => {
    const handleOnSubmit = () => {
        console.log('teste')
    }
    return (
        <div className="flex flex-col max-w-5xl m-auto">
            <h3 className="text-2xl text-blue text-center">
                <strong>Submit a question</strong>
            </h3>
            <p className="text-blue mt-4 text-center">
                If you can’t find what you need, please submit a question
                <br />
                through our contact form below & we’ll get back to you as soon
                as possible.
            </p>
            <form className="bg-yellow bg-opacity-5 py-10 mt-10 rounded-lg p-10">
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Full name
                        </span>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                        ></input>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Email
                        </span>
                        <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                        ></input>
                    </label>
                </div>

                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            What can we help you with?
                        </span>
                        <select
                            id="countries"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                            <option selected></option>
                            <option value="US">
                                General (How Clutch Works, Payment Methods)
                            </option>
                            <option value="CA">
                                More information about a Clutch Vehicle
                            </option>
                            <option value="FR">
                                Post Purchase Support/90-Day Guarantee Claims
                            </option>
                            <option value="DE">
                                Selling/Trading In My Vehicle
                            </option>
                            <option value="DE">Financing With Clutch</option>
                            <option value="DE">Pre-Order Vehicle Status</option>
                            <option value="DE">Technical Support</option>
                        </select>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-500 text-base font-normal">
                            Message
                        </span>
                        <textarea
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-blue bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                        ></textarea>
                    </label>
                </div>
                <Button title="Send Message" action={handleOnSubmit} />
            </form>
        </div>
    )
}
