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
                    <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="VIN"
                    ></input>
                </div>
                <div className="form-group mb-6">
                    <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Province"
                    ></input>
                </div>
                <div className="form-group mb-6">
                    <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Province"
                    ></input>
                </div>
                <div className="form-group mb-6">
                    <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        placeholder="Message"
                    ></textarea>
                </div>
                <Button title="Send Message" />
            </form>
        </div>
    )
}
