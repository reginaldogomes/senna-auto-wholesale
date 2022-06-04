import { useState } from 'react'
import { Button } from 'components/common/Button/Index'

export const SellForm = () => {
    const handleOnSubmit = () => {
        console.log('tese')
    }

    return (
        <div className="flex flex-col max-w-5xl m-auto">
            <h3 className="text-2xl text-blue text-center">
                <strong>Get an instant cash offer on your car</strong>
            </h3>
            <p className="text-blue mt-4 text-center">
                Tell us about your car to receive an offer.
            </p>
            <form className="bg-yellow bg-opacity-5 py-10 mt-10 rounded-lg p-10">
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-base font-normal">
                            VIN
                        </span>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                        ></input>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-base font-normal">
                            Province
                        </span>
                        <select
                            id="countries"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-base font-normal">
                            What´s the approximate mileage on your car?
                        </span>
                        <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                        ></input>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <span className="text-gray-700 text-2xl font-normal">
                        Select your transmission type
                    </span>
                    <div className="form-check">
                        <label>
                            <span>Automatic</span>
                            <input
                                name="transmission"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <span>Manual</span>
                            <input
                                name="transmission"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <span className="text-gray-700 text-2xl font-normal">
                        Do you own the vehicle outright?
                    </span>
                    <div className="flex space-x-5">
                        <label className="block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <span>Yes</span>
                            <input
                                name="vehicle"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                        <label className="block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <span>No, it´s financed</span>
                            <input
                                name="vehicle"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                        <label className="block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <span>No, it´s leased</span>
                            <input
                                name="vehicle"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-2xl font-normal">
                            What can we help you with?
                        </span>
                        <select
                            id="countries"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                            <option value="US">Blue</option>
                            <option value="CA">Black</option>
                            <option value="FR">White</option>
                            <option value="DE">Yellow</option>
                        </select>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <span>Are you selling or trading in?</span>
                    <div className="form-check">
                        <label>
                            <span>Selling</span>
                            <input
                                name="vehicle"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <span>Trading in</span>
                            <input
                                name="vehicle"
                                className="rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-base font-normal">
                            Do you own the vehicle outright?
                        </span>
                        <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Province"
                        ></input>
                    </label>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <textarea
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea13"
                            placeholder="Message"
                        ></textarea>
                    </label>
                </div>
                <Button title="Send Message" />
            </form>
        </div>
    )
}
