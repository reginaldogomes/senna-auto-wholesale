import { useState } from 'react'
import { Button } from 'components/common/Button/Index'

export const SellForm = () => {
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
                            <option selected>Choose a country</option>
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
                    <span>Select your transmission type</span>
                    <div className="form-check">
                        <label>
                            <span>Automatic</span>
                            <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <span>Manual</span>
                            <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <span>Select your transmission type</span>
                    <div className="form-check">
                        <label>
                            <span>Automatic</span>
                            <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <span>Manual</span>
                            <input
                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="radio"
                            ></input>
                        </label>
                    </div>
                </div>
                <div className="form-group mb-6">
                    <label>
                        <span className="text-gray-700 text-base font-normal">
                            Province
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
